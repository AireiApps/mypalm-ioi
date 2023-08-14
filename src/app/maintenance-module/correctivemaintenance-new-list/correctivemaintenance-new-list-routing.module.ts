import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceNewListPage } from './correctivemaintenance-new-list.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceNewListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceNewListPageRoutingModule {}
