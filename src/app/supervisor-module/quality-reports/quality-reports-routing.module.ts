import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QualityReportsPage } from './quality-reports.page';

const routes: Routes = [
  {
    path: '',
    component: QualityReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualityReportsPageRoutingModule {}
