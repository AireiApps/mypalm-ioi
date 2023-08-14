import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodePressmachinelubricationreportPageRoutingModule } from './code-pressmachinelubricationreport-routing.module';

import { CodePressmachinelubricationreportPage } from './code-pressmachinelubricationreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodePressmachinelubricationreportPageRoutingModule
  ],
  declarations: [CodePressmachinelubricationreportPage]
})
export class CodePressmachinelubricationreportPageModule {}
