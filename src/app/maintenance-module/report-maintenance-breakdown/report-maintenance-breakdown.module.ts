import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportMaintenanceBreakdownPageRoutingModule } from './report-maintenance-breakdown-routing.module';

import { ReportMaintenanceBreakdownPage } from './report-maintenance-breakdown.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportMaintenanceBreakdownPageRoutingModule
  ],
  declarations: [ReportMaintenanceBreakdownPage]
})
export class ReportMaintenanceBreakdownPageModule {}
