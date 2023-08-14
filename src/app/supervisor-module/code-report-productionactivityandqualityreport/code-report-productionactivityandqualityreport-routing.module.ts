import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportProductionactivityandqualityreportPage } from './code-report-productionactivityandqualityreport.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportProductionactivityandqualityreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportProductionactivityandqualityreportPageRoutingModule {}
