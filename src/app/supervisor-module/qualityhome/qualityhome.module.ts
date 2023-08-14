import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualityhomePageRoutingModule } from './qualityhome-routing.module';

import { QualityhomePage } from './qualityhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualityhomePageRoutingModule
  ],
  declarations: [QualityhomePage]
})
export class QualityhomePageModule {}
