import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Observable } from 'rxjs/Observable';
import { Record } from '../../models/record';
import { SaveTableDataEmitter } from '../../models/emitters';

@Component({
    selector: 'app-table-data-input',
    templateUrl: './table-data-input.component.html'
})

export class TableDataInputComponent {
    @Input() data: Record;
    @Input() row: string;
    @Input() filterField: string;
    currentRow: string;
    currentField: string;
    @Output() saveTableData: EventEmitter<SaveTableDataEmitter> = new EventEmitter();

    openInput(columnField, row): void {
        this.currentRow = row;
        this.currentField = columnField;
    }

    closeInput(): void {
        this.currentRow = null;
        this.currentField = null;
    }
}
