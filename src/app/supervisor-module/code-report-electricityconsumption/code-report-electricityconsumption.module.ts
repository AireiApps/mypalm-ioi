import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportElectricityconsumptionPageRoutingModule } from './code-report-electricityconsumption-routing.module';

import { CodeReportElectricityconsumptionPage } from './code-report-electricityconsumption.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportElectricityconsumptionPageRoutingModule
  ],
  declarations: [CodeReportElectricityconsumptionPage]
})
export class CodeReportElectricityconsumptionPageModule {}
