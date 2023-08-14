import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodePressmachinevibrationcheckPageRoutingModule } from './code-pressmachinevibrationcheck-routing.module';

import { CodePressmachinevibrationcheckPage } from './code-pressmachinevibrationcheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodePressmachinevibrationcheckPageRoutingModule
  ],
  declarations: [CodePressmachinevibrationcheckPage]
})
export class CodePressmachinevibrationcheckPageModule {}
