import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualityReportsPageRoutingModule } from './quality-reports-routing.module';

import { QualityReportsPage } from './quality-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualityReportsPageRoutingModule
  ],
  declarations: [QualityReportsPage]
})
export class QualityReportsPageModule {}
