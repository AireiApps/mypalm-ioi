import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceQrcodescannerReportPage } from './maintenance-qrcodescanner-report.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceQrcodescannerReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceQrcodescannerReportPageRoutingModule {}
