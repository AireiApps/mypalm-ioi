import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DustcollectormonitoringchecklistPage } from './dustcollectormonitoringchecklist.page';

const routes: Routes = [
  {
    path: '',
    component: DustcollectormonitoringchecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DustcollectormonitoringchecklistPageRoutingModule {}
