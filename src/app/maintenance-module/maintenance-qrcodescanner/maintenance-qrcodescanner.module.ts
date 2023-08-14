import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceQrcodescannerPageRoutingModule } from './maintenance-qrcodescanner-routing.module';

import { MaintenanceQrcodescannerPage } from './maintenance-qrcodescanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MaintenanceQrcodescannerPageRoutingModule
  ],
  declarations: [MaintenanceQrcodescannerPage]
})
export class MaintenanceQrcodescannerPageModule {}
