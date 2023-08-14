import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachinerunninghoursreportPage } from './machinerunninghoursreport.page';

const routes: Routes = [
  {
    path: '',
    component: MachinerunninghoursreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinerunninghoursreportPageRoutingModule {}
