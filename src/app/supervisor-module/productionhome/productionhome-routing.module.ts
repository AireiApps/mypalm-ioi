import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionhomePage } from './productionhome.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionhomePageRoutingModule {}
