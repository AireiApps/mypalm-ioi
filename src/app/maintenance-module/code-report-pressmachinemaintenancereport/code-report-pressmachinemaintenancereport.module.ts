import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportPressmachinemaintenancereportPageRoutingModule } from './code-report-pressmachinemaintenancereport-routing.module';

import { CodeReportPressmachinemaintenancereportPage } from './code-report-pressmachinemaintenancereport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportPressmachinemaintenancereportPageRoutingModule
  ],
  declarations: [CodeReportPressmachinemaintenancereportPage]
})
export class CodeReportPressmachinemaintenancereportPageModule {}
