import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportHomePageRoutingModule } from './report-home-routing.module';

import { ReportHomePage } from './report-home.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportHomePageRoutingModule,
    TranslateModule
  ],
  declarations: [ReportHomePage]
})
export class ReportHomePageModule {}
