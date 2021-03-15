import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportLabhourlyreportPage } from './report-labhourlyreport.page';

const routes: Routes = [
  {
    path: '',
    component: ReportLabhourlyreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportLabhourlyreportPageRoutingModule {}
