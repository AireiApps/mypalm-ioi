import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantPerformanceElecticityPage } from './plant-performance-electicity.page';

const routes: Routes = [
  {
    path: '',
    component: PlantPerformanceElecticityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantPerformanceElecticityPageRoutingModule {}
