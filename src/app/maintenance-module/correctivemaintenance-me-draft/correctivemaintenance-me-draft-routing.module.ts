import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceMeDraftPage } from './correctivemaintenance-me-draft.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceMeDraftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceMeDraftPageRoutingModule {}
