import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceQrcodescannerPage } from './maintenance-qrcodescanner.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceQrcodescannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceQrcodescannerPageRoutingModule {}
