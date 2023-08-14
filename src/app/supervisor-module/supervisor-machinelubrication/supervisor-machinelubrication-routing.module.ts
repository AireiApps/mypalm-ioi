import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorMachinelubricationPage } from './supervisor-machinelubrication.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorMachinelubricationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorMachinelubricationPageRoutingModule {}
