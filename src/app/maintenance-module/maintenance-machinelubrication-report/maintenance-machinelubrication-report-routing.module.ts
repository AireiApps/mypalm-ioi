import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceMachinelubricationReportPage } from './maintenance-machinelubrication-report.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceMachinelubricationReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceMachinelubricationReportPageRoutingModule {}
