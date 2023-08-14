import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarehousemonthlyreportPage } from './warehousemonthlyreport.page';

const routes: Routes = [
  {
    path: '',
    component: WarehousemonthlyreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehousemonthlyreportPageRoutingModule {}
