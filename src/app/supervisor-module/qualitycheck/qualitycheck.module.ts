import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualitycheckPageRoutingModule } from './qualitycheck-routing.module';

import { QualitycheckPage } from './qualitycheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QualitycheckPageRoutingModule
  ],
  declarations: [QualitycheckPage]
})
export class QualitycheckPageModule {}
