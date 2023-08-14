import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportWaterconsumptionPage } from './code-report-waterconsumption.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportWaterconsumptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportWaterconsumptionPageRoutingModule {}
