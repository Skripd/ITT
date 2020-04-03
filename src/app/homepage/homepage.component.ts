import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IFundraiser } from '../_models/fundraiser.model';
import { FundraiserIndex } from '../_models/fundraiserIndex.model';
import { GetFundraisersIndexGQL, CreateFundraiserGQL, CreateTransactionGQL } from 'src/app/generated/graphql';
import { NameUniqueValidator } from '../_utils/name-unique-validator';
import { ClrWizard, ClrWizardPage } from '@clr/angular';
import { KeycloakService } from 'keycloak-angular';
import { validate } from 'graphql';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  fundraisers: IFundraiser[] = [];
  modalNewTrackerOpen = false;
  loading: boolean;
  runningAddOperation: boolean;
  trackerSubmitDisabled = true;

  createTrackerForm = new FormGroup({
    trackerName: new FormControl('', {
      updateOn: 'change',
      asyncValidators: [this.nameUniqueValidator.validate.bind(this.nameUniqueValidator)],
      validators: [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.minLength(3),
        Validators.maxLength(26),
      ]
    }
    )
  });

  @ViewChild('wizard') wizard: ClrWizard;
  @ViewChild('myFinishPage') finishPage: ClrWizardPage;

  loadingFlag = false;
  errorFlag = false;
  checked = false;
  finished = false;
  open = false;

  createTransactionForm = new FormGroup({
    tFundraiserName: new FormControl('', [Validators.required]),
    tUserName: new FormControl(this.kc.getUsername(), [Validators.required, Validators.pattern('^[a-zA-Z0-9_-]{3,16}$')]),
    tAmount: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  constructor(
    private readonly kc: KeycloakService,
    private readonly service: GetFundraisersIndexGQL,
    private readonly createFundraiserService: CreateFundraiserGQL,
    private readonly createTransactionService: CreateTransactionGQL,
    private nameUniqueValidator: NameUniqueValidator
  ) { }

  ngOnInit() {
    this.fundraisers = [];

    const self = this;
    self.loading = true;

    this.service.fetch({}, {
      fetchPolicy: 'network-only'
    }).subscribe({
      next(rs) {
        self.fundraisers = [];
        const parsed = rs as FundraiserIndex;
        parsed.data.fundraisersConnection.edges.forEach(e => {
          self.fundraisers.push({
            id: e.node.id,
            name: e.node.name,
            count: parsed.data.fundraisersConnection.aggregate.count
          });
        });
      },
      error(err) {
        console.error('[HOMEPAGE]::\n', JSON.stringify(err));
      },
      complete() {
        console.log('[HOMEPAGE]::COMPLETE');
        self.loading = false;
      }
    });
  }


  resetForm(): void {
    this.createTrackerForm.reset();
    this.modalNewTrackerOpen = false;
  }

  check(): void {
    // this.runningAddOperation = true;
    this.createTrackerForm.statusChanges.subscribe(rs => {
      switch (rs) {
        case 'VALID': this.checkValid();
                      break;
        case 'INVALID': this.checkInvalid();
                        break;
        case 'PENDING': this.checkPending();
                        break;
        case 'DISABLED': console.log('[TRACKERFORM VALIDATION] [DISABLED]'); this.runningAddOperation = false;
                         break;
        default: console.error('[TRACKERFORM VALIDATION] [UNCAUGHT STATE]'); this.runningAddOperation = false;
      }
    });
    this.createTrackerForm.updateValueAndValidity(); // .get('trackerName').updateValueAndValidity();
  }

  private checkValid() {
    console.log('VALID');
    this.trackerSubmitDisabled = false;
    this.runningAddOperation = false;
  }

  private checkInvalid() {
    console.log('INVALID');
    this.trackerSubmitDisabled = true;
    this.runningAddOperation = false;
  }

  private checkPending() {
    console.log('PENDING');
    this.trackerSubmitDisabled = true;
    this.runningAddOperation = true;
  }

  writeFundraiser() {
    this.runningAddOperation = true;
    const self = this;
    this.createFundraiserService.mutate({
      name: this.createTrackerForm.get('trackerName').value,
    }).subscribe({
      next(rs) {
        console.log(`[WRITE NEW FUNDRAISER] [ID]::`, rs.data.createFundraiser.id);
        self.fundraisers.push({
          id: rs.data.createFundraiser.id,
          name: self.createTrackerForm.get('trackerName').value
        });
      },
      error(err) {
        console.error(`[WRITE NEW FUNDRAISER] [ERROR]::\n`, err);
      },
      complete() {
        console.log(`[WRITE NEW FUNDRAISER] [SUCCESS]`);
        self.ngOnInit();
        self.resetForm();
        self.runningAddOperation = false;
      }
    });

  }

  onFundraiserDelete(e: any) {
    if (e == null) {
      console.error(`[FAILED] [DELETE] [FUNDRAISER]`);
    } else {
      console.log(`[SUCCESS] [DELETE] [FINDRAISER]::${e}`);
      this.loading = true;
      this.fundraisers = [];
      this.ngOnInit();
    }
  }


  // have to define doCancel because page will prevent doCancel from working
  // if the page had a previous button, you would need to call
  // this.wizard.previous() manually as well...
  doCancel(): void {
    this.wizard.close();
    this.wizard.reset();
    this.createTransactionForm.reset({
      tFundraiserName: '',
      tUserName: this.kc.getUsername(),
      tAmount: 0
    });
  }

  get showCongrats(): boolean {
    return !this.errorFlag && this.checked;
  }

  resetFinalPage(): void {
    this.loadingFlag = false;
    this.errorFlag = false;
    this.checked = false;
  }

  goBack(): void {
    this.wizard.previous();
  }

  doFinish(): void {
    this.wizard.forceFinish();
    this.resetFinalPage();
    this.wizard.reset();
    this.createTransactionForm.reset({
      tFundraiserName: '',
      tUserName: this.kc.getUsername(),
      tAmount: 0
    });
    this.loadingFlag = false;
    this.errorFlag = false;
    this.checked = false;
    this.finished = false;
    this.open = false;
  }

  onCommit(): void {
    const value = {
      fundraiser: this.createTransactionForm.get('tFundraiserName').value,
      name: this.createTransactionForm.get('tUserName').value,
      amount: this.createTransactionForm.get('tAmount').value
    };

    this.loadingFlag = true;
    this.errorFlag = false;

    if (this.finished) {
      this.doFinish();
      return;
    }

    this.createTransactionService.mutate({
      amount: (value.amount as number),
      user: (value.name as string),
      owner: (value.fundraiser as string)
    }).subscribe(rs => {
      if (rs.errors) {
        this.finishPage.completed = false;
        this.errorFlag = true;
      } else {
        this.finished = true;
        this.checked = true;
        this.loadingFlag = false;
      }
    });

    // setTimeout(() => {
    //   if (value.name === 'itt-admin') {
    //   } else {

    //   }

    // }, 1000);
  }
}
