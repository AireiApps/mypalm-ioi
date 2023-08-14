import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodescannerReportsPageRoutingModule } from './qrcodescanner-reports-routing.module';

import { QrcodescannerReportsPage } from './qrcodescanner-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodescannerReportsPageRoutingModule
  ],
  declarations: [QrcodescannerReportsPage]
})
export class QrcodescannerReportsPageModule {}
