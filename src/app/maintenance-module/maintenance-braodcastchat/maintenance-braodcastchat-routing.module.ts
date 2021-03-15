import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceBraodcastchatPage } from './maintenance-braodcastchat.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceBraodcastchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceBraodcastchatPageRoutingModule {}
