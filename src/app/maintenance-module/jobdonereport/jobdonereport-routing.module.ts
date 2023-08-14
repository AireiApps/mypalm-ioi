import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobdonereportPage } from './jobdonereport.page';

const routes: Routes = [
  {
    path: '',
    component: JobdonereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobdonereportPageRoutingModule {}
