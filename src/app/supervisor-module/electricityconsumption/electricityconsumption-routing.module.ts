import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricityconsumptionPage } from './electricityconsumption.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricityconsumptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricityconsumptionPageRoutingModule {}
