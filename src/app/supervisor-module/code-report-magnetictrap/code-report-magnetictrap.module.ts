import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportMagnetictrapPageRoutingModule } from './code-report-magnetictrap-routing.module';

import { CodeReportMagnetictrapPage } from './code-report-magnetictrap.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportMagnetictrapPageRoutingModule
  ],
  declarations: [CodeReportMagnetictrapPage]
})
export class CodeReportMagnetictrapPageModule {}
