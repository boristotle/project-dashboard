import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data-service';
import { Record } from './models/record';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tableData: Record[];
  columnItems = ['Title', 'Division', 'Project_Owner', 'Budget', 'Status', 'Created', 'Modified'];
  constructor(private _DataService: DataService) {}

  ngOnInit() {
    this._DataService.getTableData('assets/mocks/mock-data.json')
      .subscribe((result) => {
        this.tableData = result;
      }, err => {
        alert(err);
      });
  }

  filterTableData(event): void {
    const filterValue = event.filter.toLowerCase();
    const value = event.value.toLowerCase();
    this._DataService.getFilteredTableData(filterValue, value)
      .subscribe(result => {
        this.tableData = result;
      }, err => {
        alert(err);
      });
  }

  saveTableData(event): void {
    let prevValue;
    const filterValue = event.filter;
    const row = event.row;
    const value = event.value;
    this.tableData.map((data, index) => {
      if (index === +row) {
        prevValue = data[filterValue];
        data[filterValue] = value;
      }
    });
    if (prevValue !== value) {
      alert(`${prevValue} updated to ${value}`);
    }
  }
}
