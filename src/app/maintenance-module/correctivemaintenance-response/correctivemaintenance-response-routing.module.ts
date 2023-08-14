import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceResponsePage } from './correctivemaintenance-response.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceResponsePageRoutingModule {}
