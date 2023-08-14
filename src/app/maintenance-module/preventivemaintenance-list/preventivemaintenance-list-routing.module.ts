import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreventivemaintenanceListPage } from './preventivemaintenance-list.page';

const routes: Routes = [
  {
    path: '',
    component: PreventivemaintenanceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreventivemaintenanceListPageRoutingModule {}
