import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrendAnalysisPageRoutingModule } from './trend-analysis-routing.module';

import { TrendAnalysisPage } from './trend-analysis.page';

import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    TrendAnalysisPageRoutingModule
  ],
  declarations: [TrendAnalysisPage]
})
export class TrendAnalysisPageModule {}
