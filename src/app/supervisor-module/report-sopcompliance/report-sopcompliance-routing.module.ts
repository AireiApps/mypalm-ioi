import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportSopcompliancePage } from './report-sopcompliance.page';

const routes: Routes = [
  {
    path: '',
    component: ReportSopcompliancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportSopcompliancePageRoutingModule {}
