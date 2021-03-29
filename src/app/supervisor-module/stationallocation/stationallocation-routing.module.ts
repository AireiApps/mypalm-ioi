import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationallocationPage } from './stationallocation.page';

const routes: Routes = [
  {
    path: '',
    component: StationallocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationallocationPageRoutingModule {}
