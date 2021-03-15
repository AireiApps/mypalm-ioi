import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisororderrequestDetailPage } from './supervisororderrequest-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisororderrequestDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisororderrequestDetailPageRoutingModule {}
