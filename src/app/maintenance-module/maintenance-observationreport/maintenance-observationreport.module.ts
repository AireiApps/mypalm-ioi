import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceObservationreportPageRoutingModule } from './maintenance-observationreport-routing.module';

import { MaintenanceObservationreportPage } from './maintenance-observationreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MaintenanceObservationreportPageRoutingModule,
    TranslateModule
  ],
  declarations: [MaintenanceObservationreportPage]
})
export class MaintenanceObservationreportPageModule {}
