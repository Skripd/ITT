import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { Fundraiser } from '../.models/fundraiser.model';
import { FundraiserService } from '../fundraiser.service';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  fundraisers: Fundraiser[];
  modalNewTrackerOpen = false;
  showWizard = false;

  createTrackerForm = new FormGroup({
    trackerName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
  });

  loading: boolean;
  runningAddOperation: boolean;

  constructor(private backend: FundraiserService) { }

  ngOnInit() {
    this.loading = true;

    this.backend.getAll().subscribe(x => {
      this.fundraisers = x;
      this.loading = false;
    },
    error => {
      console.log(`ERROR::${error}`);
      this.loading = false;
    });
  }


  resetForm(): void {
    this.createTrackerForm.reset();
    this.modalNewTrackerOpen = false;
  }

  submit(): void {
    this.runningAddOperation = true;
    this.backend.add(this.createTrackerForm.value).subscribe(
      result => {
        this.modalNewTrackerOpen = false;
        this.createTrackerForm.reset();
        this.runningAddOperation = false;
      },
      error => {
        this.runningAddOperation = false;
        this.createTrackerForm.get('trackerName').setErrors({ alreadyTaken: true });
        console.log(`ERROR::${error}`);
      }
    );
  }
}
