import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeAircompressorroutinecheckPage } from './code-aircompressorroutinecheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeAircompressorroutinecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeAircompressorroutinecheckPageRoutingModule {}
