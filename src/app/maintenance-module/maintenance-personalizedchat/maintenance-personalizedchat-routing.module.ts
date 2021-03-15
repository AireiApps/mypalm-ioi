import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancePersonalizedchatPage } from './maintenance-personalizedchat.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancePersonalizedchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancePersonalizedchatPageRoutingModule {}
