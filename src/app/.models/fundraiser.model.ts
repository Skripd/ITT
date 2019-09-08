import { Transaction } from './transaction.model';

export class Fundraiser {

    id: number;
    name: string;
    transactions: Transaction[];

    constructor(id: number, name: string, transactions: Transaction[]) {
        this.id = id;
        this.name = name;
        this.transactions = transactions;
    }
}
