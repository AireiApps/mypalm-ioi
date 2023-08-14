import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceMeNewPage } from './correctivemaintenance-me-new.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceMeNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceMeNewPageRoutingModule {}
