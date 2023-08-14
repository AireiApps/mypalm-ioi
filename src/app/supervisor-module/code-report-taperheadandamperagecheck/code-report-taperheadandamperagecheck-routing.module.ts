import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportTaperheadandamperagecheckPage } from './code-report-taperheadandamperagecheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportTaperheadandamperagecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportTaperheadandamperagecheckPageRoutingModule {}
