import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreakdownNewPage } from './breakdown-new.page';

const routes: Routes = [
  {
    path: '',
    component: BreakdownNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreakdownNewPageRoutingModule {}
