import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportMaintenanceBoilerlogPageRoutingModule } from './report-maintenance-boilerlog-routing.module';

import { ReportMaintenanceBoilerlogPage } from './report-maintenance-boilerlog.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportMaintenanceBoilerlogPageRoutingModule
  ],
  declarations: [ReportMaintenanceBoilerlogPage]
})
export class ReportMaintenanceBoilerlogPageModule {}
