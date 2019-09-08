import { Pipe, PipeTransform } from '@angular/core';
import { Fundraiser } from './.models/fundraiser.model';
import { isNullOrUndefined } from 'util';
import { Transaction } from './.models/transaction.model';

@Pipe({
  name: 'chartData'
})
export class ChartDataPipe implements PipeTransform {

  transform(_in: Fundraiser): any[] {


    if (_in === undefined) {
      console.log(`CHARTPIPE::INPUT::${JSON.stringify(_in)}`);
      return [];
    }

    let _out: any[] = [];

    _in.transactions.forEach(t => {
      const tmp = t as Transaction;
      console.log(tmp);
      _out.push({
        name: t.name,
        value: t.amount,
      });
    });

    console.log(JSON.stringify(_out));

    return _out;
  }

}
