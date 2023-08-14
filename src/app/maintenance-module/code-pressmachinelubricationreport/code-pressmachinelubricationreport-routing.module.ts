import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodePressmachinelubricationreportPage } from './code-pressmachinelubricationreport.page';

const routes: Routes = [
  {
    path: '',
    component: CodePressmachinelubricationreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePressmachinelubricationreportPageRoutingModule {}
