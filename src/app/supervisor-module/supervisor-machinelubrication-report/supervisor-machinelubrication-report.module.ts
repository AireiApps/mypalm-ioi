import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorMachinelubricationReportPageRoutingModule } from './supervisor-machinelubrication-report-routing.module';

import { SupervisorMachinelubricationReportPage } from './supervisor-machinelubrication-report.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SupervisorMachinelubricationReportPageRoutingModule
  ],
  declarations: [SupervisorMachinelubricationReportPage]
})
export class SupervisorMachinelubricationReportPageModule {}
