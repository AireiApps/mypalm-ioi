import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerTrendanalysisHistoryPage } from './manager-trendanalysis-history.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerTrendanalysisHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerTrendanalysisHistoryPageRoutingModule {}
