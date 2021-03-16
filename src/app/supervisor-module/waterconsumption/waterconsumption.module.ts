import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterconsumptionPageRoutingModule } from './waterconsumption-routing.module';

import { WaterconsumptionPage } from './waterconsumption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WaterconsumptionPageRoutingModule
  ],
  declarations: [WaterconsumptionPage]
})
export class WaterconsumptionPageModule {}
