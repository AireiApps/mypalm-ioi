import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportMaintenanceBreakdownlistPage } from './report-maintenance-breakdownlist.page';

const routes: Routes = [
  {
    path: '',
    component: ReportMaintenanceBreakdownlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportMaintenanceBreakdownlistPageRoutingModule {}
