import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresstaperheadchecklistPage } from './presstaperheadchecklist.page';

const routes: Routes = [
  {
    path: '',
    component: PresstaperheadchecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresstaperheadchecklistPageRoutingModule {}
