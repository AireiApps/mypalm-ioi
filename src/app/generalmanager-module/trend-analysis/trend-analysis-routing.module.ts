import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrendAnalysisPage } from './trend-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: TrendAnalysisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrendAnalysisPageRoutingModule {}
