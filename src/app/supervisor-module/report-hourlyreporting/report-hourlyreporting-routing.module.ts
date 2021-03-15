import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportHourlyreportingPage } from './report-hourlyreporting.page';

const routes: Routes = [
  {
    path: '',
    component: ReportHourlyreportingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportHourlyreportingPageRoutingModule {}
