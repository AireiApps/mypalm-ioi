import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorReportsPage } from './supervisor-reports.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorReportsPageRoutingModule {}
