import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresstaperheadchecklistreportPage } from './presstaperheadchecklistreport.page';

const routes: Routes = [
  {
    path: '',
    component: PresstaperheadchecklistreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresstaperheadchecklistreportPageRoutingModule {}
