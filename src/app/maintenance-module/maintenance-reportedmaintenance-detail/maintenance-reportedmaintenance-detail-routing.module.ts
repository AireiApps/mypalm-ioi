import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceReportedmaintenanceDetailPage } from './maintenance-reportedmaintenance-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceReportedmaintenanceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceReportedmaintenanceDetailPageRoutingModule {}
