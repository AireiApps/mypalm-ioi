import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorProductionreportPage } from './supervisor-productionreport.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorProductionreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorProductionreportPageRoutingModule {}
