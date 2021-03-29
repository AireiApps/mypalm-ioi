import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricityconsumptionreportPageRoutingModule } from './electricityconsumptionreport-routing.module';

import { ElectricityconsumptionreportPage } from './electricityconsumptionreport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ElectricityconsumptionreportPageRoutingModule
  ],
  declarations: [ElectricityconsumptionreportPage]
})
export class ElectricityconsumptionreportPageModule {}
