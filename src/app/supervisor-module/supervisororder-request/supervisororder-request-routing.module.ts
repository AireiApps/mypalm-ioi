import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisororderRequestPage } from './supervisororder-request.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisororderRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisororderRequestPageRoutingModule {}
