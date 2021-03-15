import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorBreakdownListPage } from './supervisor-breakdown-list.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorBreakdownListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorBreakdownListPageRoutingModule {}
