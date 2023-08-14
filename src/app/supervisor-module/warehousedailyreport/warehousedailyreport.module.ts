import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarehousedailyreportPageRoutingModule } from './warehousedailyreport-routing.module';

import { WarehousedailyreportPage } from './warehousedailyreport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WarehousedailyreportPageRoutingModule
  ],
  declarations: [WarehousedailyreportPage]
})
export class WarehousedailyreportPageModule {}
