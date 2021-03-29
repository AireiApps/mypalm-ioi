import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DustplantreportPageRoutingModule } from './dustplantreport-routing.module';

import { DustplantreportPage } from './dustplantreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DustplantreportPageRoutingModule
  ],
  declarations: [DustplantreportPage]
})
export class DustplantreportPageModule {}
