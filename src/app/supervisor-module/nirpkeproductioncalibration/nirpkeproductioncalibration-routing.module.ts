import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NirpkeproductioncalibrationPage } from './nirpkeproductioncalibration.page';

const routes: Routes = [
  {
    path: '',
    component: NirpkeproductioncalibrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NirpkeproductioncalibrationPageRoutingModule {}
