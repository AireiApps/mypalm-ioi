import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportWaterconsumptionPageRoutingModule } from './code-report-waterconsumption-routing.module';

import { CodeReportWaterconsumptionPage } from './code-report-waterconsumption.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportWaterconsumptionPageRoutingModule
  ],
  declarations: [CodeReportWaterconsumptionPage]
})
export class CodeReportWaterconsumptionPageModule {}
