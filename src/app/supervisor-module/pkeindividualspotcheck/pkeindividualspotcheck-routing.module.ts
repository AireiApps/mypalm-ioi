import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PkeindividualspotcheckPage } from './pkeindividualspotcheck.page';

const routes: Routes = [
  {
    path: '',
    component: PkeindividualspotcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PkeindividualspotcheckPageRoutingModule {}
