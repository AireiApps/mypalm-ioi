import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceRequestNotassignedPage } from './correctivemaintenance-request-notassigned.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceRequestNotassignedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceRequestNotassignedPageRoutingModule {}
