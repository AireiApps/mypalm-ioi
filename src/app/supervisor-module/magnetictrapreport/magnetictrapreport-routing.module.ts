import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagnetictrapreportPage } from './magnetictrapreport.page';

const routes: Routes = [
  {
    path: '',
    component: MagnetictrapreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagnetictrapreportPageRoutingModule {}
