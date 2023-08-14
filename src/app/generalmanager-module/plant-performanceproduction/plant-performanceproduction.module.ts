import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantPerformanceproductionPageRoutingModule } from './plant-performanceproduction-routing.module';

import { PlantPerformanceproductionPage } from './plant-performanceproduction.page';

import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    PlantPerformanceproductionPageRoutingModule
  ],
  declarations: [PlantPerformanceproductionPage]
})
export class PlantPerformanceproductionPageModule {}
