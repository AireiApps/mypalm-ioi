import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricityconsumptionPageRoutingModule } from './electricityconsumption-routing.module';

import { ElectricityconsumptionPage } from './electricityconsumption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ElectricityconsumptionPageRoutingModule
  ],
  declarations: [ElectricityconsumptionPage]
})
export class ElectricityconsumptionPageModule {}
