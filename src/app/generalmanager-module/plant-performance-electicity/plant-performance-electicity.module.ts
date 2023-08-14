import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantPerformanceElecticityPageRoutingModule } from './plant-performance-electicity-routing.module';

import { PlantPerformanceElecticityPage } from './plant-performance-electicity.page';

import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    PlantPerformanceElecticityPageRoutingModule
  ],
  declarations: [PlantPerformanceElecticityPage]
})
export class PlantPerformanceElecticityPageModule {}
