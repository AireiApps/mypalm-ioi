import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorMachinelubricationReportPage } from './supervisor-machinelubrication-report.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorMachinelubricationReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorMachinelubricationReportPageRoutingModule {}
