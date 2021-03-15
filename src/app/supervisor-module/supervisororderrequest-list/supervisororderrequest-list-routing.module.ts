import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisororderrequestListPage } from './supervisororderrequest-list.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisororderrequestListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisororderrequestListPageRoutingModule {}
