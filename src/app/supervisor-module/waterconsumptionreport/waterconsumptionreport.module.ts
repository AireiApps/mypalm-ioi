import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterconsumptionreportPageRoutingModule } from './waterconsumptionreport-routing.module';

import { WaterconsumptionreportPage } from './waterconsumptionreport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WaterconsumptionreportPageRoutingModule
  ],
  declarations: [WaterconsumptionreportPage]
})
export class WaterconsumptionreportPageModule {}
