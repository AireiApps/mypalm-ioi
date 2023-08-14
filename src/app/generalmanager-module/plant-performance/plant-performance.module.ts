import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantPerformancePageRoutingModule } from './plant-performance-routing.module';

import { PlantPerformancePage } from './plant-performance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantPerformancePageRoutingModule
  ],
  declarations: [PlantPerformancePage]
})
export class PlantPerformancePageModule {}
