import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenancePeViewPage } from './correctivemaintenance-pe-view.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenancePeViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenancePeViewPageRoutingModule {}
