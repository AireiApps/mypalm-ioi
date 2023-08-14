import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotcheckmonthlyreportPageRoutingModule } from './spotcheckmonthlyreport-routing.module';

import { SpotcheckmonthlyreportPage } from './spotcheckmonthlyreport.page';

import { SharedModule } from "src/app/shared/shared.module";
import { Share } from '@capacitor/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SpotcheckmonthlyreportPageRoutingModule
  ],
  declarations: [SpotcheckmonthlyreportPage]
})
export class SpotcheckmonthlyreportPageModule {}
