import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReportBucketelevatorroutinecheckPageRoutingModule } from './code-report-bucketelevatorroutinecheck-routing.module';

import { CodeReportBucketelevatorroutinecheckPage } from './code-report-bucketelevatorroutinecheck.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CodeReportBucketelevatorroutinecheckPageRoutingModule
  ],
  declarations: [CodeReportBucketelevatorroutinecheckPage]
})
export class CodeReportBucketelevatorroutinecheckPageModule {}
