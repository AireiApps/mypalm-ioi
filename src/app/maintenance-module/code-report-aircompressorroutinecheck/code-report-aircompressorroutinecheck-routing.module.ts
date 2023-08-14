import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportAircompressorroutinecheckPage } from './code-report-aircompressorroutinecheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportAircompressorroutinecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportAircompressorroutinecheckPageRoutingModule {}
