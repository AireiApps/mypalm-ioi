import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancePersonalizedchatdepartmentsPage } from './maintenance-personalizedchatdepartments.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancePersonalizedchatdepartmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancePersonalizedchatdepartmentsPageRoutingModule {}
