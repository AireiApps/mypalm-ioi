import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantPerformanceWaterPage } from './plant-performance-water.page';

const routes: Routes = [
  {
    path: '',
    component: PlantPerformanceWaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantPerformanceWaterPageRoutingModule {}
