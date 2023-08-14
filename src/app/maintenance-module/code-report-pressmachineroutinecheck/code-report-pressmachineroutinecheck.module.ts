import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportPressmachineroutinecheckPageRoutingModule } from './code-report-pressmachineroutinecheck-routing.module';

import { CodeReportPressmachineroutinecheckPage } from './code-report-pressmachineroutinecheck.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportPressmachineroutinecheckPageRoutingModule
  ],
  declarations: [CodeReportPressmachineroutinecheckPage]
})
export class CodeReportPressmachineroutinecheckPageModule {}
