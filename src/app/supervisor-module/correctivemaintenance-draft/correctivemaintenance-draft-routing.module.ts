import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceDraftPage } from './correctivemaintenance-draft.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceDraftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceDraftPageRoutingModule {}
