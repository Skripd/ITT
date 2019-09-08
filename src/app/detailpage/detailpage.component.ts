import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Fundraiser } from '../.models/fundraiser.model';

import { FundraiserService } from '../fundraiser.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailpageComponent implements OnInit {

  fundraiser: Fundraiser;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private backend: FundraiserService,
  ) { }

  ngOnInit() {
    this.loading = true;

    this.route.paramMap.subscribe((map: ParamMap) => {
      this.backend.getByID(Number(map.get('id'))).subscribe((rs: Fundraiser) => {
        console.log(`ONINIT::DETAIL::\n\n${JSON.stringify(rs)}`);
        this.fundraiser = rs;
        this.loading = false;

        // Manual invocation of the chartData Pipe also works
        // this.data = this.chartPipe.transform(rs);
      });
    });
  }

}
