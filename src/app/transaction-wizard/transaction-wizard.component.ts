import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClrWizard, ClrWizardPage } from '@clr/angular';
import { IFundraiser } from '../_models/fundraiser.model';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-transaction-wizard',
  templateUrl: './transaction-wizard.component.html',
})
export class TransactionWizardComponent implements OnInit {
  @ViewChild('wizard') wizard: ClrWizard;
  @ViewChild('myForm') formData: any;
  @ViewChild('myFinishPage') finishPage: ClrWizardPage;

  loadingFlag = false;
  errorFlag = false;
  checked = false;
  finished = false;
  //  open = false;
  answer: number = null;

  @Input() fundraisers: IFundraiser[];
  @Input() open: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  createTransactionForm = new FormGroup({
    wizardFundraiserOption: new FormControl('', [Validators.required]),
    wizardDonatorName: new FormControl(this.kc.getUsername(), [Validators.required, Validators.pattern('^[a-z0-9_-]{3,16}$')]),
    wizardAmount: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  constructor(private readonly kc: KeycloakService) { }

  ngOnInit() {
  }

  // have to define doCancel because page will prevent doCancel from working
  // if the page had a previous button, you would need to call
  // this.wizard.previous() manually as well...
  doCancel(): void {
    this.wizard.close();
    // this.openChange.emit(false);
    this.open = false;
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
    this.open = false;
  }

  onCommit(): void {
    const value: any = this.formData.value;
    this.loadingFlag = true;
    this.errorFlag = false;

    if (this.finished) {
      this.doFinish();
      return;
    }

    setTimeout(() => {
      if (value.answer === '42') {
        this.finished = true;
      } else {
        this.finishPage.completed = false;
        this.errorFlag = true;
      }
      this.checked = true;
      this.loadingFlag = false;
    }, 1000);
  }
}
