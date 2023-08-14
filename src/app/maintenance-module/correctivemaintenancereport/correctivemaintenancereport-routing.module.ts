import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenancereportPage } from './correctivemaintenancereport.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenancereportPageRoutingModule {}
