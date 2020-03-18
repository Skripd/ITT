import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Fundraiser } from './.models/fundraiser.model';
import { Transaction } from './.models/transaction.model';

// array with Transactions
// const transactions: Transaction[] = [
//     new Transaction(new Date(), 8, 'Octo'),
//     new Transaction(new Date(), 4, 'Spongebob'),
//     new Transaction(new Date(), 2, 'Hugh Heffner'),
//     new Transaction(new Date(), 5, 'Jack Daniels'),
//     new Transaction(new Date(), 15, 'Louis Vuitton'),
// ];

// array with Fundraisers
let fundraisers: Fundraiser[] = [
    new Fundraiser(0, 'Parting gift for colleague', [
        new Transaction(new Date(), 8, 'Sjaak Trekhaak'),
        new Transaction(new Date(), 4, 'Spongebob'),
        new Transaction(new Date(), 2, 'Hugh Heffner'),
        new Transaction(new Date(), 5, 'Jack Daniels'),
        new Transaction(new Date(), 15, 'Louis Vuitton'),
    ]),
    new Fundraiser(1, 'Janets birthday', [
        new Transaction(new Date(), 8, 'Sjaak Trekhaak'),
        new Transaction(new Date(), 4, 'Spongebob'),
        new Transaction(new Date(), 2, 'Hugh Heffner'),
        new Transaction(new Date(), 5, 'Jack Daniels'),
        new Transaction(new Date(), 15, 'Louis Vuitton'),
    ]),
    new Fundraiser(2, 'Gas money trip to disneyland', [
        new Transaction(new Date(), 8, 'Sjaak Trekhaak'),
        new Transaction(new Date(), 4, 'Spongebob'),
        new Transaction(new Date(), 2, 'Hugh Heffner'),
        new Transaction(new Date(), 5, 'Jack Daniels'),
        new Transaction(new Date(), 15, 'Louis Vuitton'),
    ]),
    new Fundraiser(3, 'Dinner Disneyland @ Pluto Steakhouse', [
        new Transaction(new Date(), 8, 'Sjaak Trekhaak'),
        new Transaction(new Date(), 4, 'Spongebob'),
        new Transaction(new Date(), 2, 'Hugh Heffner'),
        new Transaction(new Date(), 5, 'Jack Daniels'),
        new Transaction(new Date(), 15, 'Louis Vuitton'),
    ]),
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            // tslint:disable-next-line: max-line-length
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(1000))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/fundraisers/add') && method === 'POST':
                    return add();
                case url.endsWith('/fundraisers') && method === 'GET':
                    return getFundraisers();
                case url.match(/\/fundraisers\/\d+$/) && method === 'GET':
                    return getFundraiserById();
                case url.match(/\/fundraisers\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                case url.endsWith('/transactions/add') && method === 'POST':
                    return addTransaction();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions

        function addTransaction() {
            const t = body;

            if ((fundraisers.find(x => x.id === t.id) === undefined)) {
                return error(`Fundraiser with id ${t.id} does not exist`);
            }

            fundraisers[Number(t.id)].transactions.push(new Transaction(new Date(), Number(t.amount), t.name));
            ok();
        }

        function add() {
            const rs = body;

            console.log(`BACKEND::\n${JSON.stringify(rs)}`);

            if (fundraisers.find(x => x.name.toLowerCase() === rs.trackerName.toLowerCase())) {
                return error(`Fundraiser with name ${rs.name} already exists!`);
            }

            rs.id = fundraisers.length ? Math.max(...fundraisers.map(x => x.id)) + 1 : 1;
            fundraisers.push(new Fundraiser(Number(rs.id), rs.trackerName, []));
            // localStorage.setItem('users', JSON.stringify(rs));

            return ok();
        }

        function getFundraisers() {
            return ok(fundraisers);
        }

        function getFundraiserById() {
            console.log(`IDFROMURL::${idFromUrl()}`);
            const fr = fundraisers.find(x => x.id === idFromUrl());
            console.log(`\nBACKEND::GET_BY_ID::\n\n${JSON.stringify(fr)}`);
            return ok(fr);
        }

        function deleteUser() {
            fundraisers = fundraisers.filter(x => x.id !== idFromUrl());
            // localStorage.setItem('users', JSON.stringify(fundraisers));
            return ok();
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
