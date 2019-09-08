import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fundraiser } from './.models/fundraiser.model';
import { Transaction } from './.models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class FundraiserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Fundraiser[]>('/fundraisers');
  }

  getByID(id: number) {
    return this.http.get<Fundraiser>(`/fundraisers/${id}`);
  }

  deleteByID(id: number) {
    return this.http.delete(`/fundraisers/${id}`);
  }

  add(rs: Fundraiser) {
    return this.http.post(`/fundraisers/add`, rs);
  }

  addTransaction(t: Transaction) {
    console.log(`SERVICE::\n${JSON.stringify(t)}`);
    return this.http.post(`/transactions/add`, t);
  }
}
