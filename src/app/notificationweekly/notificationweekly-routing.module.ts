import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationweeklyPage } from './notificationweekly.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationweeklyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationweeklyPageRoutingModule {}
