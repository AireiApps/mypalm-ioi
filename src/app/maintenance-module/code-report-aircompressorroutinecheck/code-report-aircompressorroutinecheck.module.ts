import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportAircompressorroutinecheckPageRoutingModule } from './code-report-aircompressorroutinecheck-routing.module';

import { CodeReportAircompressorroutinecheckPage } from './code-report-aircompressorroutinecheck.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportAircompressorroutinecheckPageRoutingModule
  ],
  declarations: [CodeReportAircompressorroutinecheckPage]
})
export class CodeReportAircompressorroutinecheckPageModule {}
