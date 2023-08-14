import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeFtlPlantsystemmaintenancereportPage } from './code-ftl-plantsystemmaintenancereport.page';

const routes: Routes = [
  {
    path: '',
    component: CodeFtlPlantsystemmaintenancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeFtlPlantsystemmaintenancereportPageRoutingModule {}
