import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreakdownDetailPage } from './breakdown-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BreakdownDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreakdownDetailPageRoutingModule {}
