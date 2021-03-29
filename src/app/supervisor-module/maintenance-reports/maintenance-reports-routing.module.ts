import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceReportsPage } from './maintenance-reports.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceReportsPageRoutingModule {}
