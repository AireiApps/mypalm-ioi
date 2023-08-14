import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeAircompressorroutinecheckPageRoutingModule } from './code-aircompressorroutinecheck-routing.module';

import { CodeAircompressorroutinecheckPage } from './code-aircompressorroutinecheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeAircompressorroutinecheckPageRoutingModule
  ],
  declarations: [CodeAircompressorroutinecheckPage]
})
export class CodeAircompressorroutinecheckPageModule {}
