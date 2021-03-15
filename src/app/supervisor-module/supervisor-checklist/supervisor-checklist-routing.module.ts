import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorChecklistPage } from './supervisor-checklist.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorChecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorChecklistPageRoutingModule {}
