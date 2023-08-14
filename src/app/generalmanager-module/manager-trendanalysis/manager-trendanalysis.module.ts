import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerTrendanalysisPageRoutingModule } from './manager-trendanalysis-routing.module';

import { ManagerTrendanalysisPage } from './manager-trendanalysis.page';

import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    IonicModule,
    ManagerTrendanalysisPageRoutingModule
  ],
  declarations: [ManagerTrendanalysisPage]
})
export class ManagerTrendanalysisPageModule {}
