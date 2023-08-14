import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodePlantsystemmaintenancereportPage } from './code-plantsystemmaintenancereport.page';

const routes: Routes = [
  {
    path: '',
    component: CodePlantsystemmaintenancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePlantsystemmaintenancereportPageRoutingModule {}
