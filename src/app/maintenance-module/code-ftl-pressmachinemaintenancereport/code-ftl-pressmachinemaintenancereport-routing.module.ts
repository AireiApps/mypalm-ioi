import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeFtlPressmachinemaintenancereportPage } from './code-ftl-pressmachinemaintenancereport.page';

const routes: Routes = [
  {
    path: '',
    component: CodeFtlPressmachinemaintenancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeFtlPressmachinemaintenancereportPageRoutingModule {}
