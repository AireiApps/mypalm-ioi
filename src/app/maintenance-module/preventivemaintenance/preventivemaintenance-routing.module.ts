import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreventivemaintenancePage } from './preventivemaintenance.page';

const routes: Routes = [
  {
    path: '',
    component: PreventivemaintenancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreventivemaintenancePageRoutingModule {}
