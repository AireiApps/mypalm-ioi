import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorPersonalizedchatdepartmentPage } from './supervisor-personalizedchatdepartment.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorPersonalizedchatdepartmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorPersonalizedchatdepartmentPageRoutingModule {}
