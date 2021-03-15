import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportProductionchecklistPage } from './report-productionchecklist.page';

const routes: Routes = [
  {
    path: '',
    component: ReportProductionchecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportProductionchecklistPageRoutingModule {}
