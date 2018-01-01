import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Record } from '../../models/record';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html'
})

export class TableComponent {
    constructor(private _DataService: DataService) {}
    @Input() tableData: Record[];
    @Input() columnItems: string[];
    @Output() onInputChange: EventEmitter<any> = new EventEmitter();
    @Output() saveTableData: EventEmitter<any> = new EventEmitter();
    @Output() openInput: EventEmitter<any> = new EventEmitter();
}