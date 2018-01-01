import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Record } from '../../models/record';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html'
})

export class StatsComponent {
    @Input() tableData: Record[];

    get averageBudget() {
        if (this.tableData) {
            let total = this.tableData
            .reduce((prev, next) => {
            return prev + next.budget;
        }, 0);
        return (total / this.tableData.length).toFixed(2);
        }
    }

    get statusAndCount() {
        let statusAndCount = {
            new: 0,
            delivered: 0,
            working: 0,
            archived: 0
        }
        if (this.tableData) {
            this.tableData
                .forEach((data) => {
                    return statusAndCount[data.status]++;
                });
                return statusAndCount;
        }
    }
}