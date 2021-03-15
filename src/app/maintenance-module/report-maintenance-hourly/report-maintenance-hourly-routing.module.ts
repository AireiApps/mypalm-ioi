import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportMaintenanceHourlyPage } from './report-maintenance-hourly.page';

const routes: Routes = [
  {
    path: '',
    component: ReportMaintenanceHourlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportMaintenanceHourlyPageRoutingModule {}
