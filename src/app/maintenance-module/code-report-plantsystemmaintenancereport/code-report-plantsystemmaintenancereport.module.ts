import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportPlantsystemmaintenancereportPageRoutingModule } from './code-report-plantsystemmaintenancereport-routing.module';

import { CodeReportPlantsystemmaintenancereportPage } from './code-report-plantsystemmaintenancereport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportPlantsystemmaintenancereportPageRoutingModule
  ],
  declarations: [CodeReportPlantsystemmaintenancereportPage]
})
export class CodeReportPlantsystemmaintenancereportPageModule {}
