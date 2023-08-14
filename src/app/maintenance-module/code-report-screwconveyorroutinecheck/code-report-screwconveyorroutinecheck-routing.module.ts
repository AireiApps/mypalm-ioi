import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportScrewconveyorroutinecheckPage } from './code-report-screwconveyorroutinecheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportScrewconveyorroutinecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportScrewconveyorroutinecheckPageRoutingModule {}
