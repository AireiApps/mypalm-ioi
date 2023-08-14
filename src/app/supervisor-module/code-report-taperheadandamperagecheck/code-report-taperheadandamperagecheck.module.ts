import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportTaperheadandamperagecheckPageRoutingModule } from './code-report-taperheadandamperagecheck-routing.module';

import { CodeReportTaperheadandamperagecheckPage } from './code-report-taperheadandamperagecheck.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportTaperheadandamperagecheckPageRoutingModule
  ],
  declarations: [CodeReportTaperheadandamperagecheckPage]
})
export class CodeReportTaperheadandamperagecheckPageModule {}
