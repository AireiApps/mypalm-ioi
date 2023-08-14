import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeWaterconsumptionPage } from './code-waterconsumption.page';

const routes: Routes = [
  {
    path: '',
    component: CodeWaterconsumptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeWaterconsumptionPageRoutingModule {}
