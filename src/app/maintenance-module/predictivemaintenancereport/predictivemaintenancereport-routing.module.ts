import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredictivemaintenancereportPage } from './predictivemaintenancereport.page';

const routes: Routes = [
  {
    path: '',
    component: PredictivemaintenancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredictivemaintenancereportPageRoutingModule {}
