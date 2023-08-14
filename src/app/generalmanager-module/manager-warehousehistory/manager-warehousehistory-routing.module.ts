import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerWarehousehistoryPage } from './manager-warehousehistory.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerWarehousehistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerWarehousehistoryPageRoutingModule {}
