import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeProductionactivityandqualityreportPageRoutingModule } from './code-productionactivityandqualityreport-routing.module';

import { CodeProductionactivityandqualityreportPage } from './code-productionactivityandqualityreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeProductionactivityandqualityreportPageRoutingModule
  ],
  declarations: [CodeProductionactivityandqualityreportPage]
})
export class CodeProductionactivityandqualityreportPageModule {}
