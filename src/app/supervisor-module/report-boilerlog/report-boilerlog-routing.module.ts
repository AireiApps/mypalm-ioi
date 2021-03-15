import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportBoilerlogPage } from './report-boilerlog.page';

const routes: Routes = [
  {
    path: '',
    component: ReportBoilerlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportBoilerlogPageRoutingModule {}
