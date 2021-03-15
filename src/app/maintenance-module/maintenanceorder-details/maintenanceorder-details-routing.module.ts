import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceorderDetailsPage } from './maintenanceorder-details.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceorderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceorderDetailsPageRoutingModule {}
