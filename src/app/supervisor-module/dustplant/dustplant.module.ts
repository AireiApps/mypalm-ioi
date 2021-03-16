import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DustplantPageRoutingModule } from './dustplant-routing.module';

import { DustplantPage } from './dustplant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DustplantPageRoutingModule
  ],
  declarations: [DustplantPage]
})
export class DustplantPageModule {}
