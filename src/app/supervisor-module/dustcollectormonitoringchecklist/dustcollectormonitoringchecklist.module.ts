import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DustcollectormonitoringchecklistPageRoutingModule } from './dustcollectormonitoringchecklist-routing.module';

import { DustcollectormonitoringchecklistPage } from './dustcollectormonitoringchecklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DustcollectormonitoringchecklistPageRoutingModule
  ],
  declarations: [DustcollectormonitoringchecklistPage]
})
export class DustcollectormonitoringchecklistPageModule {}
