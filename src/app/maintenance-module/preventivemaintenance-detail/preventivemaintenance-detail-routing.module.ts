import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreventivemaintenanceDetailPage } from './preventivemaintenance-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PreventivemaintenanceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreventivemaintenanceDetailPageRoutingModule {}
