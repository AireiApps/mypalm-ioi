import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NirpkeproductioncalibrationPageRoutingModule } from './nirpkeproductioncalibration-routing.module';

import { NirpkeproductioncalibrationPage } from './nirpkeproductioncalibration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NirpkeproductioncalibrationPageRoutingModule
  ],
  declarations: [NirpkeproductioncalibrationPage]
})
export class NirpkeproductioncalibrationPageModule {}
