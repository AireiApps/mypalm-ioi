import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorHistoryPage } from './supervisor-history.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorHistoryPageRoutingModule {}
