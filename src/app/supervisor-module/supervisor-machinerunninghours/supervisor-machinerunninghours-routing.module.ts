import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorMachinerunninghoursPage } from './supervisor-machinerunninghours.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorMachinerunninghoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorMachinerunninghoursPageRoutingModule {}
