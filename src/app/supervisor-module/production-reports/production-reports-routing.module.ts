import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionReportsPage } from './production-reports.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionReportsPageRoutingModule {}
