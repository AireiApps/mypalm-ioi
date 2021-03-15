import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporthomePage } from './reporthome.page';

const routes: Routes = [
  {
    path: '',
    component: ReporthomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporthomePageRoutingModule {}
