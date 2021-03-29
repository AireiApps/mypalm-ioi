import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DustcollectormonitoringchecklistreportPage } from './dustcollectormonitoringchecklistreport.page';

const routes: Routes = [
  {
    path: '',
    component: DustcollectormonitoringchecklistreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DustcollectormonitoringchecklistreportPageRoutingModule {}
