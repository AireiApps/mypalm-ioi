import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeTaperheadandamperagecheckPage } from './code-taperheadandamperagecheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeTaperheadandamperagecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeTaperheadandamperagecheckPageRoutingModule {}
