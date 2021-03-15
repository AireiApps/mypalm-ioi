import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportBreakdownPage } from './report-breakdown.page';

const routes: Routes = [
  {
    path: '',
    component: ReportBreakdownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportBreakdownPageRoutingModule {}
