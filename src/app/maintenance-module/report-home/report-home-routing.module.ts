import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportHomePage } from './report-home.page';

const routes: Routes = [
  {
    path: '',
    component: ReportHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportHomePageRoutingModule {}
