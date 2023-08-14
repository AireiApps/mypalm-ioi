import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceQrcodescannerReportPageRoutingModule } from './maintenance-qrcodescanner-report-routing.module';

import { MaintenanceQrcodescannerReportPage } from './maintenance-qrcodescanner-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceQrcodescannerReportPageRoutingModule
  ],
  declarations: [MaintenanceQrcodescannerReportPage]
})
export class MaintenanceQrcodescannerReportPageModule {}
