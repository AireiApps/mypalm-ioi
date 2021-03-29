import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NirpkeproductionreportPageRoutingModule } from './nirpkeproductionreport-routing.module';

import { NirpkeproductionreportPage } from './nirpkeproductionreport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NirpkeproductionreportPageRoutingModule
  ],
  declarations: [NirpkeproductionreportPage]
})
export class NirpkeproductionreportPageModule {}
