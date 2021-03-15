import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceChecklistPage } from './maintenance-checklist.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceChecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceChecklistPageRoutingModule {}
