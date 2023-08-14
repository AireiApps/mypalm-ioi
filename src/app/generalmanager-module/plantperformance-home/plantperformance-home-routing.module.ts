import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantperformanceHomePage } from './plantperformance-home.page';

const routes: Routes = [
  {
    path: '',
    component: PlantperformanceHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantperformanceHomePageRoutingModule {}
