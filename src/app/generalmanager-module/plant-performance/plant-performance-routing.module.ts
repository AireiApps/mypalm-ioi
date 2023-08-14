import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantPerformancePage } from './plant-performance.page';

const routes: Routes = [
  {
    path: '',
    component: PlantPerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantPerformancePageRoutingModule {}
