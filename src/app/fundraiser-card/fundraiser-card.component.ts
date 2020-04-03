import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { IFundraiser } from '../_models/fundraiser.model';
import { DeleteFundraiserGQL } from 'src/app/generated/graphql';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fundraiser-card',
  templateUrl: './fundraiser-card.component.html',
  styleUrls: ['./fundraiser-card.component.scss']
})
export class FundraiserCardComponent implements OnDestroy {

  @Input() fundraiser: IFundraiser;
  @Output() deleted = new EventEmitter<string>();

  delete: Subscription;

  constructor(private readonly service: DeleteFundraiserGQL) { }

  ngOnDestroy(): void {
    this.delete?.unsubscribe();
  }

  onDelete() {
    // console.log('CALLED DELETE FOR ID ', this.fundraiser.id);

    this.delete = this.service.mutate({
      id: this.fundraiser.id
    }).subscribe(rs => {
      if (rs.errors) {
        this.deleted.emit(null);
      } else {
        this.deleted.emit(rs.data.deleteFundraiser?.id);
      }
    });
  }
}
