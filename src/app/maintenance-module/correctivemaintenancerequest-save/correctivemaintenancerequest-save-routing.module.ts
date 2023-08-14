import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenancerequestSavePage } from './correctivemaintenancerequest-save.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenancerequestSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenancerequestSavePageRoutingModule {}
