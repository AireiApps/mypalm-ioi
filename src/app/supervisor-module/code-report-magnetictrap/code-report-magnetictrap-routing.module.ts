import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportMagnetictrapPage } from './code-report-magnetictrap.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportMagnetictrapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportMagnetictrapPageRoutingModule {}
