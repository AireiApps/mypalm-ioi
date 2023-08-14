import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportDustcollectorPage } from './code-report-dustcollector.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportDustcollectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportDustcollectorPageRoutingModule {}
