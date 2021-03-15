import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveformPage } from './leaveform.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveformPageRoutingModule {}
