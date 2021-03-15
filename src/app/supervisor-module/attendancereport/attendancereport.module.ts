import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendancereportPageRoutingModule } from './attendancereport-routing.module';

import { AttendancereportPage } from './attendancereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AttendancereportPageRoutingModule
  ],
  declarations: [AttendancereportPage]
})
export class AttendancereportPageModule {}
