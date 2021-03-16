import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DustplantPage } from './dustplant.page';

const routes: Routes = [
  {
    path: '',
    component: DustplantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DustplantPageRoutingModule {}
