import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportMaintenanceChecklistreportPageRoutingModule } from './report-maintenance-checklistreport-routing.module';

import { ReportMaintenanceChecklistreportPage } from './report-maintenance-checklistreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportMaintenanceChecklistreportPageRoutingModule
  ],
  declarations: [ReportMaintenanceChecklistreportPage]
})
export class ReportMaintenanceChecklistreportPageModule {}
