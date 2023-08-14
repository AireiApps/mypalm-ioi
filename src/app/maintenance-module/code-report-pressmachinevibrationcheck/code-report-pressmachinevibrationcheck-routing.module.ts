import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportPressmachinevibrationcheckPage } from './code-report-pressmachinevibrationcheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportPressmachinevibrationcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportPressmachinevibrationcheckPageRoutingModule {}
