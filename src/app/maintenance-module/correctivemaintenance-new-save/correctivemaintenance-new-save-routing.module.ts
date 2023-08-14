import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceNewSavePage } from './correctivemaintenance-new-save.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceNewSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceNewSavePageRoutingModule {}
