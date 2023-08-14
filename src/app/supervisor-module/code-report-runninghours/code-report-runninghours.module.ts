import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportRunninghoursPageRoutingModule } from './code-report-runninghours-routing.module';

import { CodeReportRunninghoursPage } from './code-report-runninghours.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportRunninghoursPageRoutingModule
  ],
  declarations: [CodeReportRunninghoursPage]
})
export class CodeReportRunninghoursPageModule {}
