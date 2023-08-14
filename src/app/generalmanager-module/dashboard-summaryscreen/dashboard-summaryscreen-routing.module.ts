import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardSummaryscreenPage } from './dashboard-summaryscreen.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardSummaryscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardSummaryscreenPageRoutingModule {}
