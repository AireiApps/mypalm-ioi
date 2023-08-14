import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeElectricityconsumptionPage } from './code-electricityconsumption.page';

const routes: Routes = [
  {
    path: '',
    component: CodeElectricityconsumptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeElectricityconsumptionPageRoutingModule {}
