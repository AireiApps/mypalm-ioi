import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodePressmachineroutinecheckPage } from './code-pressmachineroutinecheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodePressmachineroutinecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePressmachineroutinecheckPageRoutingModule {}
