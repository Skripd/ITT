export class Transaction {

    id?: number;
    date: Date;
    amount: number;
    name: string;

    constructor(_date: Date, _amount: number, _name: string, _id?: number) {
        this.date = _date; this.amount = _amount; this.name = _name; this.id = _id;
    }
}
