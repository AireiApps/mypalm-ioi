import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportProductionchecklistPageRoutingModule } from './report-productionchecklist-routing.module';

import { ReportProductionchecklistPage } from './report-productionchecklist.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportProductionchecklistPageRoutingModule
  ],
  declarations: [ReportProductionchecklistPage]
})
export class ReportProductionchecklistPageModule {}
