import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceAttendancePage } from './maintenance-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceAttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceAttendancePageRoutingModule {}
