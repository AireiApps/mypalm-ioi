import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeBucketelevatorroutinecheckPageRoutingModule } from './code-bucketelevatorroutinecheck-routing.module';

import { CodeBucketelevatorroutinecheckPage } from './code-bucketelevatorroutinecheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeBucketelevatorroutinecheckPageRoutingModule
  ],
  declarations: [CodeBucketelevatorroutinecheckPage]
})
export class CodeBucketelevatorroutinecheckPageModule {}
