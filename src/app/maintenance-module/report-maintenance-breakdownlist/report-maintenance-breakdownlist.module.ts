import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportMaintenanceBreakdownlistPageRoutingModule } from './report-maintenance-breakdownlist-routing.module';

import { ReportMaintenanceBreakdownlistPage } from './report-maintenance-breakdownlist.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportMaintenanceBreakdownlistPageRoutingModule
  ],
  declarations: [ReportMaintenanceBreakdownlistPage]
})
export class ReportMaintenanceBreakdownlistPageModule {}
