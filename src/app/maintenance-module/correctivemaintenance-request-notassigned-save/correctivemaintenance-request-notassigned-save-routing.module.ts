import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceRequestNotassignedSavePage } from './correctivemaintenance-request-notassigned-save.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceRequestNotassignedSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceRequestNotassignedSavePageRoutingModule {}
