import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportLabdailyreportPageRoutingModule } from './report-labdailyreport-routing.module';

import { ReportLabdailyreportPage } from './report-labdailyreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportLabdailyreportPageRoutingModule
  ],
  declarations: [ReportLabdailyreportPage]
})
export class ReportLabdailyreportPageModule {}
