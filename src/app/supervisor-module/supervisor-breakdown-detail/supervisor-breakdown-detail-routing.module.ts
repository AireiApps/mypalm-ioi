import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorBreakdownDetailPage } from './supervisor-breakdown-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorBreakdownDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorBreakdownDetailPageRoutingModule {}
