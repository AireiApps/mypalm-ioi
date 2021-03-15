import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendancePageRoutingModule } from './attendance-routing.module';

import { AttendancePage } from './attendance.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendancePageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [AttendancePage]
})
export class AttendancePageModule {}
