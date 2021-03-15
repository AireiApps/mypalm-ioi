import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportMaintenanceHourlyPageRoutingModule } from './report-maintenance-hourly-routing.module';

import { ReportMaintenanceHourlyPage } from './report-maintenance-hourly.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportMaintenanceHourlyPageRoutingModule
  ],
  declarations: [ReportMaintenanceHourlyPage]
})
export class ReportMaintenanceHourlyPageModule {}
