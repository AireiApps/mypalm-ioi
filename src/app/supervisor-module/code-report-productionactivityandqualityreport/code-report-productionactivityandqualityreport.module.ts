import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportProductionactivityandqualityreportPageRoutingModule } from './code-report-productionactivityandqualityreport-routing.module';

import { CodeReportProductionactivityandqualityreportPage } from './code-report-productionactivityandqualityreport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    
    CodeReportProductionactivityandqualityreportPageRoutingModule
  ],
  declarations: [CodeReportProductionactivityandqualityreportPage]
})
export class CodeReportProductionactivityandqualityreportPageModule {}
