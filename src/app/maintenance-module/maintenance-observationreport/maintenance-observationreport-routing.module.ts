import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceObservationreportPage } from './maintenance-observationreport.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceObservationreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceObservationreportPageRoutingModule {}
