import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashoboard2Page } from './dashoboard2.page';

const routes: Routes = [
  {
    path: '',
    component: Dashoboard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dashoboard2PageRoutingModule {}
