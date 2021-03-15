import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceAttendancePageRoutingModule } from './maintenance-attendance-routing.module';

import { MaintenanceAttendancePage } from './maintenance-attendance.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MaintenanceAttendancePageRoutingModule,
    TranslateModule
  ],
  declarations: [MaintenanceAttendancePage]
})
export class MaintenanceAttendancePageModule {}
