import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorBroadcastchatPage } from './supervisor-broadcastchat.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorBroadcastchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorBroadcastchatPageRoutingModule {}
