import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HourlyReportingPage } from './hourly-reporting.page';

const routes: Routes = [
  {
    path: '',
    component: HourlyReportingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HourlyReportingPageRoutingModule {}
