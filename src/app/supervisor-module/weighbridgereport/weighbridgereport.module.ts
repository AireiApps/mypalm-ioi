import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeighbridgereportPageRoutingModule } from './weighbridgereport-routing.module';

import { WeighbridgereportPage } from './weighbridgereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule,
    WeighbridgereportPageRoutingModule
  ],
  declarations: [WeighbridgereportPage]
})
export class WeighbridgereportPageModule {}
