import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeProductionactivityandqualityreportPage } from './code-productionactivityandqualityreport.page';

const routes: Routes = [
  {
    path: '',
    component: CodeProductionactivityandqualityreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeProductionactivityandqualityreportPageRoutingModule {}
