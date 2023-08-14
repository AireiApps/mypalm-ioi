import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoomimagePage } from './zoomimage.page';

const routes: Routes = [
  {
    path: '',
    component: ZoomimagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoomimagePageRoutingModule {}
