import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { IFundraiser } from '../_models/fundraiser.model';
import { DeleteFundraiserGQL, GetTransactionCountByOwnerIdGQL } from 'src/app/generated/graphql';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fundraiser-card',
  templateUrl: './fundraiser-card.component.html',
  styleUrls: ['./fundraiser-card.component.scss']
})
export class FundraiserCardComponent implements OnDestroy, OnInit {

  @Input() fundraiser: IFundraiser;
  @Output() deleted = new EventEmitter<string>();

  delete: Subscription;

  loading = true;
  transactionCount = 0;

  constructor(
    private readonly service: DeleteFundraiserGQL,
    private readonly getTransactionCount: GetTransactionCountByOwnerIdGQL,
    ) { }

  ngOnInit(): void {
    this.getTransactionCount.fetch({
      id: this.fundraiser.id
    }).subscribe(rs => {
      if (rs.errors) {
      } else {
        this.transactionCount = rs.data.transactionsConnection.aggregate.count;
      }
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.delete?.unsubscribe();
  }

  onDelete() {
    // console.log('CALLED DELETE FOR ID ', this.fundraiser.id);

    this.delete = this.service.mutate({
      id: this.fundraiser.id
    }).subscribe(rs => {
      if (rs.errors) {
        console.error(rs.errors);
        this.deleted.emit(null);
      } else {
        this.deleted.emit(rs.data.deleteFundraiser?.id);
      }
    });
  }
}
