import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NirpkeproductionreportPage } from './nirpkeproductionreport.page';

const routes: Routes = [
  {
    path: '',
    component: NirpkeproductionreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NirpkeproductionreportPageRoutingModule {}
