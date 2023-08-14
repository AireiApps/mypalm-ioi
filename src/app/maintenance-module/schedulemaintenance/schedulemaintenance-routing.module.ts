import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulemaintenancePage } from './schedulemaintenance.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulemaintenancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulemaintenancePageRoutingModule {}
