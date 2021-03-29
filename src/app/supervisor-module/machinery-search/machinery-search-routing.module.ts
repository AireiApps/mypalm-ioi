import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachinerySearchPage } from './machinery-search.page';

const routes: Routes = [
  {
    path: '',
    component: MachinerySearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinerySearchPageRoutingModule {}
