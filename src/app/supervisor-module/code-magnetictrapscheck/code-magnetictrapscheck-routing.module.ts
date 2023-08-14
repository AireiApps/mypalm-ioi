import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeMagnetictrapscheckPage } from './code-magnetictrapscheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeMagnetictrapscheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeMagnetictrapscheckPageRoutingModule {}
