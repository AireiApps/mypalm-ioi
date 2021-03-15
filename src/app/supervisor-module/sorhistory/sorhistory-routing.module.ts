import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorhistoryPage } from './sorhistory.page';

const routes: Routes = [
  {
    path: '',
    component: SorhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorhistoryPageRoutingModule {}
