import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportBreakdownPageRoutingModule } from './report-breakdown-routing.module';

import { ReportBreakdownPage } from './report-breakdown.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportBreakdownPageRoutingModule
  ],
  declarations: [ReportBreakdownPage]
})
export class ReportBreakdownPageModule {}
