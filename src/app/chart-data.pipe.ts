import { Pipe, PipeTransform } from '@angular/core';
import { IFundraiser } from './_models/fundraiser.model';
import { ITransaction } from './_models/transaction.model';
import * as _ from 'lodash';

@Pipe({
  name: 'chartData'
})
export class ChartDataPipe implements PipeTransform {

  transform(_in: IFundraiser): any[] {


    if (_in === undefined) {
      return [];
    }

    // first we add up all transactions
    const output = _(_in.transactions).groupBy('user')
    .map((objs, key) => ({
      user: key.toLowerCase(),
      amount: _.sumBy(objs, 'amount')
    }))
    .value();
    
    // Second we transform the data so that the chart can display it
    const _out: any[] = [];

    output.forEach(t => {
      _out.push({
        name: t.user,
        value: t.amount,
      });
    });

    return _out;
  }

}
