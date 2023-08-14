import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyActivitylogPage } from './daily-activitylog.page';

const routes: Routes = [
  {
    path: '',
    component: DailyActivitylogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyActivitylogPageRoutingModule {}
