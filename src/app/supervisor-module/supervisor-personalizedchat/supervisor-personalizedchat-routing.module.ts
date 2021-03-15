import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorPersonalizedchatPage } from './supervisor-personalizedchat.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorPersonalizedchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorPersonalizedchatPageRoutingModule {}
