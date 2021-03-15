import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceAddnewjobPage } from './maintenance-addnewjob.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceAddnewjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceAddnewjobPageRoutingModule {}
