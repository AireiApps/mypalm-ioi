import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreventivemaintenancereportPage } from './preventivemaintenancereport.page';

const routes: Routes = [
  {
    path: '',
    component: PreventivemaintenancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreventivemaintenancereportPageRoutingModule {}
