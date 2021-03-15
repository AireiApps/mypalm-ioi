import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceReportedmaintenanceNewPage } from './maintenance-reportedmaintenance-new.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceReportedmaintenanceNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceReportedmaintenanceNewPageRoutingModule {}
