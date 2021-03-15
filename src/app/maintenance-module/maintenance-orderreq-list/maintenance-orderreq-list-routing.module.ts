import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceOrderreqListPage } from './maintenance-orderreq-list.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceOrderreqListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceOrderreqListPageRoutingModule {}
