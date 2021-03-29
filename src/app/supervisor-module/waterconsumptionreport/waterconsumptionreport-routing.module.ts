import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaterconsumptionreportPage } from './waterconsumptionreport.page';

const routes: Routes = [
  {
    path: '',
    component: WaterconsumptionreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterconsumptionreportPageRoutingModule {}
