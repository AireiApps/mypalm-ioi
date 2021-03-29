import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DustcollectormonitoringchecklistreportPageRoutingModule } from './dustcollectormonitoringchecklistreport-routing.module';

import { DustcollectormonitoringchecklistreportPage } from './dustcollectormonitoringchecklistreport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DustcollectormonitoringchecklistreportPageRoutingModule
  ],
  declarations: [DustcollectormonitoringchecklistreportPage]
})
export class DustcollectormonitoringchecklistreportPageModule {}
