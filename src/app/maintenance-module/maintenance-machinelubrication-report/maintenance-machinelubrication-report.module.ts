import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceMachinelubricationReportPageRoutingModule } from './maintenance-machinelubrication-report-routing.module';

import { MaintenanceMachinelubricationReportPage } from './maintenance-machinelubrication-report.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MaintenanceMachinelubricationReportPageRoutingModule
  ],
  declarations: [MaintenanceMachinelubricationReportPage]
})
export class MaintenanceMachinelubricationReportPageModule {}
