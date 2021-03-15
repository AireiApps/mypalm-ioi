import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportMaintenanceBreakdownPage } from './report-maintenance-breakdown.page';

const routes: Routes = [
  {
    path: '',
    component: ReportMaintenanceBreakdownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportMaintenanceBreakdownPageRoutingModule {}
