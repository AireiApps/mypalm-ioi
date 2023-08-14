import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportRunninghoursPage } from './code-report-runninghours.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportRunninghoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportRunninghoursPageRoutingModule {}
