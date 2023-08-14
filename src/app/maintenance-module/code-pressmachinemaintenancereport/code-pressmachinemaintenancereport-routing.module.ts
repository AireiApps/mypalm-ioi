import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodePressmachinemaintenancereportPage } from './code-pressmachinemaintenancereport.page';

const routes: Routes = [
  {
    path: '',
    component: CodePressmachinemaintenancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePressmachinemaintenancereportPageRoutingModule {}
