import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodePressmachineroutinecheckPageRoutingModule } from './code-pressmachineroutinecheck-routing.module';

import { CodePressmachineroutinecheckPage } from './code-pressmachineroutinecheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodePressmachineroutinecheckPageRoutingModule
  ],
  declarations: [CodePressmachineroutinecheckPage]
})
export class CodePressmachineroutinecheckPageModule {}
