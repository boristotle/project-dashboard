import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Record } from '../models/record';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';



@Injectable()
export class DataService {
    constructor(private http: Http) {}
    private currentState = { tableData: null };

    getTableData(url): Observable<Record[]> {
        return this.http.get(url)
            .map( res => {
                this.currentState.tableData = res.json();
                return res.json();
            })
            .catch( err => Observable.throw(err));
    }

    getFilteredTableData(filterType, value): Observable<Record[]> {
        if (value === '' || value == null) {
            return Observable.of(this.currentState.tableData);
        } else {
            return Observable.of(this.currentState.tableData.filter(data => {
                if (filterType !== 'created' && filterType !== 'modified') {
                    return data[filterType].toString().toLowerCase().indexOf(value) >= 0;
                } else if (filterType === 'created') {
                    const date = new Date(value);
                    return new Date(data[filterType]) >= date;
                } else {
                    const date = new Date(value);
                    return new Date(data[filterType]) <= date;
                }
            }));
        }
    }
}
