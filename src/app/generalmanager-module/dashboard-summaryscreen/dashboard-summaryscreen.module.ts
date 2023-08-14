import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardSummaryscreenPageRoutingModule } from './dashboard-summaryscreen-routing.module';

import { DashboardSummaryscreenPage } from './dashboard-summaryscreen.page';

import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    DashboardSummaryscreenPageRoutingModule
  ],
  declarations: [DashboardSummaryscreenPage]
})
export class DashboardSummaryscreenPageModule {}
