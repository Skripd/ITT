import { Injectable } from '@angular/core';
import { FundraiserByOwnerGQL, WipeTransactionsGQL, InsertManyTransactionsGQL } from '../generated/graphql';
import { IFundraiser } from '../_models/fundraiser.model';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { ITransaction } from '../_models/transaction.model';
import { UserToUserPayment } from '../_models/userToUserPayment';

@Injectable({
  providedIn: 'root'
})
export class PostProcessorService {

  constructor(
    private readonly getFundraiserService: FundraiserByOwnerGQL,
    private readonly wipeTransactionsService: WipeTransactionsGQL,
    private readonly insertTransactionsService: InsertManyTransactionsGQL,
  ) { }

  async process(id: string): Promise<UserToUserPayment[]> {
    const fundraiser = await this.getFundraiser(id);

    // sanity check
    if (fundraiser.transactions.length === 0) {
      return;
    }

    const flat = await this.flattenTransactions(fundraiser);

    return this.algorithm(flat);
  }

  private async getFundraiser(id: string): Promise<IFundraiser> {
    return this.getFundraiserService.fetch({
      id
    }, {
      fetchPolicy: 'network-only'
    }).pipe(map(x => x.data.fundraiser as IFundraiser)).toPromise();
  }

  private async flattenTransactions(f: IFundraiser): Promise<IFundraiser> {
    f.transactions = _(f.transactions).groupBy('user')
      .map((objs, key) => ({
        user: key.toLowerCase(),
        amount: _.sumBy(objs, 'amount')
      } as ITransaction))
      .value();

    console.log('[POST PROCESSOR]::\n', f);
    return Promise.resolve(f);
  }

  private async algorithm(flat: IFundraiser): Promise<UserToUserPayment[]> {

    // Calculate Total
    let total = 0;
    flat.transactions.forEach(e => {
      total += e.amount;
    });

    const median = total / flat.transactions.length;

    let payUp: ITransaction[] = [];
    let getPayed: ITransaction[] = [];
    const normalized: ITransaction[] = [];
    const transactions: UserToUserPayment[] = [];

    console.log('FLAT::', flat);

    // Categorize the transactions
    flat.transactions.forEach(e => {
      if (e.amount < median) {
        payUp.push(Object.assign({}, e));
      } else if (e.amount > median) {
        getPayed.push(Object.assign({}, e));
      } else if (e.amount === median) {
        normalized.push(Object.assign({}, e));
      }
    });

    console.log('\nmedian::\n', median, '\npayUp::\n', payUp, '\ngetPayed::\n', getPayed, '\nnormalized::\n', normalized);

    // sort to speed up large lists
    getPayed = getPayed.sort(  (a, b) => b.amount - a.amount); // DESC
    payUp = payUp.sort(     (a, b) => a.amount - b.amount); // ASC

    // console.log('\nmedian::\n', median, '\npayUp::\n', JSON.stringify(payUp), '\ngetPayed::\n', JSON.stringify(getPayed), '\nnormalized::\n', JSON.stringify(normalized));

    getPayed.forEach((e, i, GPobject) => {
      let payUpIndex = 0;
      let amountDue = e.amount - median;
      let done = false;
      console.log('[0] GETPAYED', e, 'PAYUPINDEX::', payUpIndex, ' due::' , amountDue);

      while (amountDue !== 0 && !done) {
        const pu = payUp[payUpIndex];
        const canPay = median - payUp[payUpIndex].amount;
        console.log('[1] pu::', pu, ' canPay::', canPay, 'gp::', e, ' DUE::', amountDue);

        if (pu.amount === median) {
            console.log('[A] payUp amount same as medium... skipping');
            payUpIndex++;
        } else if (amountDue > canPay) { // AD4 CP1                                                      // There is more due than user has to pay so::
          // console.log('[2] [GETPAYED NOW]::', JSON.stringify(getPayed[i]));
          getPayed[i].amount = e.amount - canPay;                                         // Update getPayed.amount - the canPay
          payUp[payUpIndex].amount = payUp[payUpIndex].amount + canPay;
          amountDue = amountDue - canPay;                                                 // Update amountDue
          console.log('[2] [GETPAYED UPDATE]::', JSON.stringify(getPayed[i]), ' PAYUPINDEX::', payUpIndex, ' AMOUNTDUE::', amountDue);
          transactions.push({ from: pu.user, to: getPayed[i].user, amount: canPay.toFixed(2) });    // Log Transaction
          payUpIndex++;                                                                   // Increase the index to fullfill using the next payer

        } else if (amountDue < canPay) { // AD1 CP3                                               // User can pay more than is due so::
          console.log('[3] [PAYUP]::', JSON.stringify(payUp[payUpIndex]), ' AMOUNTDUE::', amountDue);
          payUp[payUpIndex].amount = pu.amount + amountDue;                              // canPay > amountDue so we can add amountDue to PayUp.amount
          getPayed[i].amount = getPayed[i].amount - amountDue;
          console.log('[3] [PAYUP UPDATE]::', JSON.stringify(payUp[payUpIndex]), ' AMOUNTDUE::', amountDue);
          transactions.push({ from: pu.user, to: getPayed[i].user, amount: amountDue.toFixed(2) }); // Log Transaction
          amountDue = 0;                                                                  // Set AmountDue to 0 to exit while and move to next getPayed

        } else if (amountDue === canPay) {                                                // AmountDue matches amount user has to pay.
                                                                                          // We just write up the transaction and move on.
          payUp[payUpIndex].amount = median;
          getPayed[i].amount = median;
          transactions.push({ from: pu.user, to: getPayed[i].user, amount: amountDue.toFixed(2) }); // Log Transaction
          payUpIndex++;                                                                   // One up the index to move to next payer
          amountDue = 0;                                                               // set amountdue to 0 so we move to the next getPayed
          // console.log('[4] AMOUNTDUE MATCHES CANPAY... Not taking action.');
          // amountDue = 0;
        }

        if (payUp.length === payUpIndex) {                                                // Can't escape a foreach, so we perform a hack.
          console.log('[Z] [EXITED WITH CONDITIONS]::', payUp.length, ' AND ', payUpIndex);
          done = true;
        } else {
          console.log('[ZZ] [NO EXIT WITH CONDITIONS]::', payUp.length, ' AND ', payUpIndex);
        }
      }

    });

    console.log('[ALGORITHM] [RESULT]::\n', JSON.stringify(transactions));
    return Promise.resolve(transactions);
  }
}

/**
 * Algorithm
 *
 * case: 5 Users donating 1,2,3,4,5 respectively
 *
 * Calculate total money in fundraiser: 1+2+3+4+5         === 15
 * Calculate what each user should pay: total / users     === 3
 * Check who needs to be pay'd and who needs to pay       === if [amount] > 3 -> add to should get payed
 *                                                        === if [amount] < 3 -> add to should pay up
 *                                                        === if [amount] === 3 -> do nothing
 * Note:: The two lists are sorted DESC for [Should Get Payed] and ASC for [Should Pay Up]
 * [Should Pay Up]::    [5, 4]
 * [SHould Get Payed]:: [1, 2]
 *
 * [should get payed][0]  <5> - 3 = 2
 * Go over list [Should Pay Up] and fill transaction requests [Regression needed]
 *
 * FULLFILL <2> -> while([Should get payed][0]<SGP> != 3) { <SGP>.amount<2> -= <Take One>[Should Pay Up].amount FLOOR(0) }
 *                                                        => Creates Transaction
 *
 *
 */
