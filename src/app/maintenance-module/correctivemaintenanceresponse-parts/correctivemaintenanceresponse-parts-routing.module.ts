import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceresponsePartsPage } from './correctivemaintenanceresponse-parts.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceresponsePartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceresponsePartsPageRoutingModule {}
