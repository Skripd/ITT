import { Transaction, ITransaction } from './transaction.model';

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

export interface IFundraiser {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name?: string;
    transactions?: ITransaction[];
    count?: number;
}
