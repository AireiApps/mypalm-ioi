import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeighbridgereportPage } from './weighbridgereport.page';

const routes: Routes = [
  {
    path: '',
    component: WeighbridgereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeighbridgereportPageRoutingModule {}
