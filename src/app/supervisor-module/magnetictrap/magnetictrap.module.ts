import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagnetictrapPageRoutingModule } from './magnetictrap-routing.module';

import { MagnetictrapPage } from './magnetictrap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MagnetictrapPageRoutingModule
  ],
  declarations: [MagnetictrapPage]
})
export class MagnetictrapPageModule {}
