import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceJobdonereportPage } from './maintenance-jobdonereport.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceJobdonereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceJobdonereportPageRoutingModule {}
