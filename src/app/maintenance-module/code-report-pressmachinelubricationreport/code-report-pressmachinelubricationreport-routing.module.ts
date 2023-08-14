import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportPressmachinelubricationreportPage } from './code-report-pressmachinelubricationreport.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportPressmachinelubricationreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportPressmachinelubricationreportPageRoutingModule {}
