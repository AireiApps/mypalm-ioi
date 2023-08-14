import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeWaterconsumptionPageRoutingModule } from './code-waterconsumption-routing.module';

import { CodeWaterconsumptionPage } from './code-waterconsumption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeWaterconsumptionPageRoutingModule
  ],
  declarations: [CodeWaterconsumptionPage]
})
export class CodeWaterconsumptionPageModule {}
