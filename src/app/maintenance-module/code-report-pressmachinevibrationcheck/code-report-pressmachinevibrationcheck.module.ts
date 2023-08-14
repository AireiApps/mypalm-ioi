import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportPressmachinevibrationcheckPageRoutingModule } from './code-report-pressmachinevibrationcheck-routing.module';

import { CodeReportPressmachinevibrationcheckPage } from './code-report-pressmachinevibrationcheck.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportPressmachinevibrationcheckPageRoutingModule
  ],
  declarations: [CodeReportPressmachinevibrationcheckPage]
})
export class CodeReportPressmachinevibrationcheckPageModule {}
