import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagecollectionDustPage } from './imagecollection-dust.page';

const routes: Routes = [
  {
    path: '',
    component: ImagecollectionDustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagecollectionDustPageRoutingModule {}
