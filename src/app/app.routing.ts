import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordDetailComponent } from './components/record-detail/record-detail.component';


const routes: Routes = [{
       path: 'record-detail',
       pathMatch: 'full',
       component: RecordDetailComponent
    }
];

@NgModule({
    imports: [
            RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [
            RouterModule
    ]
  })
  export class AppRoutingModule {}
