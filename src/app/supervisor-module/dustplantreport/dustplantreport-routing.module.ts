import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DustplantreportPage } from './dustplantreport.page';

const routes: Routes = [
  {
    path: '',
    component: DustplantreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DustplantreportPageRoutingModule {}
