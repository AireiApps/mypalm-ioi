import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerTrendanalysisPage } from './manager-trendanalysis.page';



const routes: Routes = [
  {
    path: '',
    component: ManagerTrendanalysisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerTrendanalysisPageRoutingModule {}
