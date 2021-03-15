import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreakdownDetailPageRoutingModule } from './breakdown-detail-routing.module';

import { BreakdownDetailPage } from './breakdown-detail.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BreakdownDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [BreakdownDetailPage]
})
export class BreakdownDetailPageModule {}
