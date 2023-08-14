import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodePressmachinevibrationcheckPage } from './code-pressmachinevibrationcheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodePressmachinevibrationcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePressmachinevibrationcheckPageRoutingModule {}
