import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceNewDraftPage } from './correctivemaintenance-new-draft.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceNewDraftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceNewDraftPageRoutingModule {}
