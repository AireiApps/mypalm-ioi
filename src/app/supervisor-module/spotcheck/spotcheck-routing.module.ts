import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotcheckPage } from './spotcheck.page';

const routes: Routes = [
  {
    path: '',
    component: SpotcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotcheckPageRoutingModule {}
