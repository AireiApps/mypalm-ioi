import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportScrewconveyorroutinecheckPageRoutingModule } from './code-report-screwconveyorroutinecheck-routing.module';

import { CodeReportScrewconveyorroutinecheckPage } from './code-report-screwconveyorroutinecheck.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportScrewconveyorroutinecheckPageRoutingModule
  ],
  declarations: [CodeReportScrewconveyorroutinecheckPage]
})
export class CodeReportScrewconveyorroutinecheckPageModule {}
