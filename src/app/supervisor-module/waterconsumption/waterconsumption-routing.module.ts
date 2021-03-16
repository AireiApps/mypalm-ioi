import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaterconsumptionPage } from './waterconsumption.page';

const routes: Routes = [
  {
    path: '',
    component: WaterconsumptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterconsumptionPageRoutingModule {}
