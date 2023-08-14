import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantPerformanceWaterPageRoutingModule } from './plant-performance-water-routing.module';

import { PlantPerformanceWaterPage } from './plant-performance-water.page';

import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    PlantPerformanceWaterPageRoutingModule
  ],
  declarations: [PlantPerformanceWaterPage]
})
export class PlantPerformanceWaterPageModule {}
