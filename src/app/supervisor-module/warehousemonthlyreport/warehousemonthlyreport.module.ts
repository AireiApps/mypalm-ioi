import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarehousemonthlyreportPageRoutingModule } from './warehousemonthlyreport-routing.module';

import { WarehousemonthlyreportPage } from './warehousemonthlyreport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WarehousemonthlyreportPageRoutingModule
  ],
  declarations: [WarehousemonthlyreportPage]
})
export class WarehousemonthlyreportPageModule {}
