import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StationallocationPageRoutingModule } from './stationallocation-routing.module';

import { StationallocationPage } from './stationallocation.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StationallocationPageRoutingModule
  ],
  declarations: [StationallocationPage]
})
export class StationallocationPageModule {}
