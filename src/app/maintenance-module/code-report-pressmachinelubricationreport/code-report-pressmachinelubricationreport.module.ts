import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportPressmachinelubricationreportPageRoutingModule } from './code-report-pressmachinelubricationreport-routing.module';

import { CodeReportPressmachinelubricationreportPage } from './code-report-pressmachinelubricationreport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportPressmachinelubricationreportPageRoutingModule
  ],
  declarations: [CodeReportPressmachinelubricationreportPage]
})
export class CodeReportPressmachinelubricationreportPageModule {}
