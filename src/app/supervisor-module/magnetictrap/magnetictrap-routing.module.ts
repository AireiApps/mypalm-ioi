import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagnetictrapPage } from './magnetictrap.page';

const routes: Routes = [
  {
    path: '',
    component: MagnetictrapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagnetictrapPageRoutingModule {}
