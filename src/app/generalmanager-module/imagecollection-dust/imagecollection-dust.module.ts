import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagecollectionDustPageRoutingModule } from './imagecollection-dust-routing.module';

import { ImagecollectionDustPage } from './imagecollection-dust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagecollectionDustPageRoutingModule
  ],
  declarations: [ImagecollectionDustPage]
})
export class ImagecollectionDustPageModule {}
