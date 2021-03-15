import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BroadcastcommunicationreportPage } from './broadcastcommunicationreport.page';

const routes: Routes = [
  {
    path: '',
    component: BroadcastcommunicationreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BroadcastcommunicationreportPageRoutingModule {}
