import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportElectricityconsumptionPage } from './code-report-electricityconsumption.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportElectricityconsumptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportElectricityconsumptionPageRoutingModule {}
