import { Component, OnInit, Input } from '@angular/core';
import { Fundraiser } from '../.models/fundraiser.model';

@Component({
  selector: 'app-fundraiser-card',
  templateUrl: './fundraiser-card.component.html',
  styleUrls: ['./fundraiser-card.component.scss']
})
export class FundraiserCardComponent {

  @Input() fundraiser: Fundraiser;

  constructor() { }
}
