import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PkeindividualspotcheckreportPage } from './pkeindividualspotcheckreport.page';

const routes: Routes = [
  {
    path: '',
    component: PkeindividualspotcheckreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PkeindividualspotcheckreportPageRoutingModule {}
