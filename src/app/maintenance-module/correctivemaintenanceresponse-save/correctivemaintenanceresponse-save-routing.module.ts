import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceresponseSavePage } from './correctivemaintenanceresponse-save.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceresponseSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceresponseSavePageRoutingModule {}
