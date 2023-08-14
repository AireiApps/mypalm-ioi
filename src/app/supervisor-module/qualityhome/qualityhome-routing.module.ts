import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QualityhomePage } from './qualityhome.page';

const routes: Routes = [
  {
    path: '',
    component: QualityhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualityhomePageRoutingModule {}
