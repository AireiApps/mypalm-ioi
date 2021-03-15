import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceOrderreqDetailPage } from './maintenance-orderreq-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceOrderreqDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceOrderreqDetailPageRoutingModule {}
