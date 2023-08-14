import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoomimagePageRoutingModule } from './zoomimage-routing.module';

import { ZoomimagePage } from './zoomimage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoomimagePageRoutingModule
  ],
  declarations: [ZoomimagePage]
})
export class ZoomimagePageModule {}
