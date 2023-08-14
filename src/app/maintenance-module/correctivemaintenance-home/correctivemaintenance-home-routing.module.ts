import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectivemaintenanceHomePage } from './correctivemaintenance-home.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectivemaintenanceHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectivemaintenanceHomePageRoutingModule {}
