import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendancereportPage } from './attendancereport.page';

const routes: Routes = [
  {
    path: '',
    component: AttendancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendancereportPageRoutingModule {}
