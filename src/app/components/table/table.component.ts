import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Record } from '../../models/record';
import { SaveTableDataEmitter, InputChangeEmitter } from '../../models/emitters';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html'
})

export class TableComponent {
    constructor(private _DataService: DataService) {}
    @Input() tableData: Record[];
    @Input() columnItems: string[];
    @Output() inputChange: EventEmitter<InputChangeEmitter> = new EventEmitter();
    @Output() saveTableData: EventEmitter<SaveTableDataEmitter> = new EventEmitter();
}
