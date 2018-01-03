import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Record } from '../../models/record';

@Component({
    selector: 'app-record-detail',
    templateUrl: './record-detail.component.html'
})

export class RecordDetailComponent {
    constructor(private _DataService: DataService) {}
}