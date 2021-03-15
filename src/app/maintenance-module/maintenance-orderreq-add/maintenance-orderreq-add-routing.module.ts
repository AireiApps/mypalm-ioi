import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceOrderreqAddPage } from './maintenance-orderreq-add.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceOrderreqAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceOrderreqAddPageRoutingModule {}
