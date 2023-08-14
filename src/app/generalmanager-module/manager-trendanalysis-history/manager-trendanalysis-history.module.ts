import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerTrendanalysisHistoryPageRoutingModule } from './manager-trendanalysis-history-routing.module';

import { ManagerTrendanalysisHistoryPage } from './manager-trendanalysis-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ManagerTrendanalysisHistoryPageRoutingModule
  ],
  declarations: [ManagerTrendanalysisHistoryPage]
})
export class ManagerTrendanalysisHistoryPageModule {}
