import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportMaintenanceChecklistreportPage } from './report-maintenance-checklistreport.page';

const routes: Routes = [
  {
    path: '',
    component: ReportMaintenanceChecklistreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportMaintenanceChecklistreportPageRoutingModule {}
