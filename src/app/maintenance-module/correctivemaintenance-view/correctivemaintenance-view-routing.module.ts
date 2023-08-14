import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceViewPage } from './correctivemaintenance-view.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceViewPageRoutingModule {}
