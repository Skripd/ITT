import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { IFundraiser } from '../_models/fundraiser.model';
import { GetFundraiserGQL } from '../generated/graphql';
import { ITransaction } from '../_models/transaction.model';
import { PostProcessorService } from '../_utils/post-processor.service';
import { UserToUserPayment } from '../_models/userToUserPayment';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailpageComponent implements OnInit {

  fundraiser: IFundraiser;
  loading: boolean;

  payments: UserToUserPayment[] = [];
  paymentsLoading = true;

  constructor(
    private route: ActivatedRoute,
    private readonly service: GetFundraiserGQL,
    private readonly processor: PostProcessorService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.paymentsLoading = true;


    this.route.paramMap.subscribe((map: ParamMap) => {

      this.processor.process(map.get('id')).then(value => {
        if(value?.length > 0) {
          this.payments = value;
        }
        this.paymentsLoading = false;
      });

      this.service.fetch({
        id: map.get('id')
      }).subscribe(rs => {
        console.log(`ONINIT::DETAIL::\n\n${JSON.stringify(rs)}`);
        if (rs.errors) {
          return;
        } else {
          this.fundraiser = rs.data.fundraiser;
          this.loading = false;
        }

        // Manual invocation of the chartData Pipe also works
        // this.data = this.chartPipe.transform(rs);
      }, err => {
        console.error('[DETAIL] [PROBABLY CLIENT NOT DEFINED]');
      });
    });
  }

}
