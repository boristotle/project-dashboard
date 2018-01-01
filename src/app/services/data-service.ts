import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class DataService {
    constructor(private http: Http) {}

    getTableData(url) {
        return this.http.get(url)
            .map( res => res.json())
            .catch( err => Observable.throw(err))
    }

    getFilteredTableData(url, filterType, value) {
        if (value === '' || value == null) {
            return this.getTableData(url);
        } else {
            return this.http.get(url)
                .map( res => res.json()
                .filter(data => {
                    if (filterType !== 'created' && filterType !== 'modified') {
                        return data[filterType].toString().toLowerCase().indexOf(value) >= 0
                    } else if (filterType === 'created') {
                        const date = new Date(value);
                        return new Date(data[filterType]) >= date;
                    } else {
                        const date = new Date(value);
                        return new Date(data[filterType]) <= date;
                    }
                }))
                .catch( err => Observable.throw(err))
        }
    }

}