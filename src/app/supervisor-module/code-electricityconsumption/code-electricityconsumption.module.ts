import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeElectricityconsumptionPageRoutingModule } from './code-electricityconsumption-routing.module';

import { CodeElectricityconsumptionPage } from './code-electricityconsumption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeElectricityconsumptionPageRoutingModule
  ],
  declarations: [CodeElectricityconsumptionPage]
})
export class CodeElectricityconsumptionPageModule {}
