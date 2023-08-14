import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarehousedailyreportPage } from './warehousedailyreport.page';

const routes: Routes = [
  {
    path: '',
    component: WarehousedailyreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehousedailyreportPageRoutingModule {}
