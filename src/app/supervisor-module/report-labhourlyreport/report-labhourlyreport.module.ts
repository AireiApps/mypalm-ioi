import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportLabhourlyreportPageRoutingModule } from './report-labhourlyreport-routing.module';

import { ReportLabhourlyreportPage } from './report-labhourlyreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportLabhourlyreportPageRoutingModule
  ],
  declarations: [ReportLabhourlyreportPage]
})
export class ReportLabhourlyreportPageModule {}
