import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorBreakdownNewPage } from './supervisor-breakdown-new.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorBreakdownNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorBreakdownNewPageRoutingModule {}
