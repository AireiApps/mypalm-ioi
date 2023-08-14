import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantPerformanceproductionPage } from './plant-performanceproduction.page';

const routes: Routes = [
  {
    path: '',
    component: PlantPerformanceproductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantPerformanceproductionPageRoutingModule {}
