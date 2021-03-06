import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { DataService } from './services/data-service';
import { HttpModule } from '@angular/http';
import { TableDataInputComponent } from './components/table/table-data-input.component';
import { StatsComponent } from './components/stats/stats.component';
import { AppRoutingModule } from './app.routing';
import { RecordDetailComponent } from './components/record-detail/record-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableDataInputComponent,
    StatsComponent,
    RecordDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
