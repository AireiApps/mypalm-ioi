import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportBoilerlogPageRoutingModule } from './report-boilerlog-routing.module';

import { ReportBoilerlogPage } from './report-boilerlog.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportBoilerlogPageRoutingModule
  ],
  declarations: [ReportBoilerlogPage]
})
export class ReportBoilerlogPageModule {}
