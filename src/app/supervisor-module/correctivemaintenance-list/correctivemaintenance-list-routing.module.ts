import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceListPage } from './correctivemaintenance-list.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceListPageRoutingModule {}
