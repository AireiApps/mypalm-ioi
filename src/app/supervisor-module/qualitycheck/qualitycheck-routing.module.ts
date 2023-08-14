import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QualitycheckPage } from './qualitycheck.page';

const routes: Routes = [
  {
    path: '',
    component: QualitycheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualitycheckPageRoutingModule {}
