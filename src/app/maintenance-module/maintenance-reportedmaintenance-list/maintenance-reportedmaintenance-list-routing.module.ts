import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceReportedmaintenanceListPage } from './maintenance-reportedmaintenance-list.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceReportedmaintenanceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceReportedmaintenanceListPageRoutingModule {}
