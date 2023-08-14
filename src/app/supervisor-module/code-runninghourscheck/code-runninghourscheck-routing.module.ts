import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeRunninghourscheckPage } from './code-runninghourscheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeRunninghourscheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeRunninghourscheckPageRoutingModule {}
