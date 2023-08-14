import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportPressmachineroutinecheckPage } from './code-report-pressmachineroutinecheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportPressmachineroutinecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportPressmachineroutinecheckPageRoutingModule {}
