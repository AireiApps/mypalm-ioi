import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresstaperheadchecklistreportPageRoutingModule } from './presstaperheadchecklistreport-routing.module';

import { PresstaperheadchecklistreportPage } from './presstaperheadchecklistreport.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PresstaperheadchecklistreportPageRoutingModule
  ],
  declarations: [PresstaperheadchecklistreportPage]
})
export class PresstaperheadchecklistreportPageModule {}
