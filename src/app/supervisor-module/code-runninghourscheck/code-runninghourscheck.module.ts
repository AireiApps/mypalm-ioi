import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeRunninghourscheckPageRoutingModule } from './code-runninghourscheck-routing.module';

import { CodeRunninghourscheckPage } from './code-runninghourscheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeRunninghourscheckPageRoutingModule
  ],
  declarations: [CodeRunninghourscheckPage]
})
export class CodeRunninghourscheckPageModule {}
