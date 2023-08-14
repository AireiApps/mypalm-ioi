import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeScrewconveyorroutinecheckPage } from './code-screwconveyorroutinecheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeScrewconveyorroutinecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeScrewconveyorroutinecheckPageRoutingModule {}
