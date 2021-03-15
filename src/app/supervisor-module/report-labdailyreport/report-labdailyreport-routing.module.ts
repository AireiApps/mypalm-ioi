import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportLabdailyreportPage } from './report-labdailyreport.page';

const routes: Routes = [
  {
    path: '',
    component: ReportLabdailyreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportLabdailyreportPageRoutingModule {}
