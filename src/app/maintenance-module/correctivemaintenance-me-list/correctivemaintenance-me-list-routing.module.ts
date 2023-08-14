import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceMeListPage } from './correctivemaintenance-me-list.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceMeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceMeListPageRoutingModule {}
