import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClrWizard } from '@clr/angular';
import { FundraiserService } from '../fundraiser.service';
import { Fundraiser } from '../.models/fundraiser.model';
import { Transaction } from '../.models/transaction.model';

@Component({
  selector: 'app-transaction-wizard',
  templateUrl: './transaction-wizard.component.html',
  //  styleUrls: ['./transaction-wizard.component.scss']
})
export class TransactionWizardComponent implements OnInit {
  @ViewChild('wizard', { static: false }) wizard: ClrWizard;

  @Input() fundraisers: Fundraiser[];
  @Output() showChange = new EventEmitter<boolean>();

  open: boolean;

  createTransactionForm = new FormGroup({
    wizardFundraiserOption: new FormControl('', [Validators.required]),
    wizardDonatorName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    wizardAmount: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor(private backend: FundraiserService) { }

  ngOnInit() {
  }

  @Input()
  get show() {
    return this.open;
  }

  set show(show: boolean) {
    this.open = show;
    this.showChange.emit(this.open);

    if (show) {
      this.wizard.open();
    }
  }

  // Too much a hassle to implement fully. Gonna assume errors never happen which is acceptable since the backend is fake.
  onSubmit(): void {
    console.log(this.createTransactionForm.value);
    this.backend.addTransaction(
      new Transaction(
        new Date(),
        Number(this.createTransactionForm.get('wizardAmount').value), 
        this.createTransactionForm.get('wizardDonatorName').value, 
        Number(this.createTransactionForm.get('wizardFundraiserOption').value)),
    ).subscribe(
      result => {
        this.createTransactionForm.reset();
        this.wizard.reset();
        this.show = false;
      },
      error => {
        console.log(`ERROR::WIZARD::ONSUBMIT::\n\n${error}`);
        this.createTransactionForm.reset();
        this.wizard.reset();
        this.show = false;
      }
    );
  }

  onCancel() {
    this.createTransactionForm.reset();
    this.show = false;
  }

  onNext() {
    this.createTransactionForm.markAllAsTouched();
  }
}
