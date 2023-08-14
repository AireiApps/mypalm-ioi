import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportDustcollectorPageRoutingModule } from './code-report-dustcollector-routing.module';

import { CodeReportDustcollectorPage } from './code-report-dustcollector.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportDustcollectorPageRoutingModule
  ],
  declarations: [CodeReportDustcollectorPage]
})
export class CodeReportDustcollectorPageModule {}
