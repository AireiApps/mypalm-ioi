import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancehomePage } from './maintenancehome.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancehomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancehomePageRoutingModule {}
