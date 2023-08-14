import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotcheckdailyreportPageRoutingModule } from './spotcheckdailyreport-routing.module';

import { SpotcheckdailyreportPage } from './spotcheckdailyreport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SpotcheckdailyreportPageRoutingModule
  ],
  declarations: [SpotcheckdailyreportPage]
})
export class SpotcheckdailyreportPageModule {}
