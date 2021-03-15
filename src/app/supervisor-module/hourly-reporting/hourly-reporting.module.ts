import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HourlyReportingPageRoutingModule } from './hourly-reporting-routing.module';

import { HourlyReportingPage } from './hourly-reporting.page';

import { TranslateModule } from "@ngx-translate/core";

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HourlyReportingPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [HourlyReportingPage]
})
export class HourlyReportingPageModule {}
