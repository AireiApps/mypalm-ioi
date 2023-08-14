import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportPressmachinemaintenancereportPage } from './code-report-pressmachinemaintenancereport.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportPressmachinemaintenancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportPressmachinemaintenancereportPageRoutingModule {}
