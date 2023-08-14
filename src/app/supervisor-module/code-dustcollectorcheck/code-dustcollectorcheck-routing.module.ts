import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeDustcollectorcheckPage } from './code-dustcollectorcheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeDustcollectorcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeDustcollectorcheckPageRoutingModule {}
