import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotcheckdailyreportPage } from './spotcheckdailyreport.page';

const routes: Routes = [
  {
    path: '',
    component: SpotcheckdailyreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotcheckdailyreportPageRoutingModule {}
