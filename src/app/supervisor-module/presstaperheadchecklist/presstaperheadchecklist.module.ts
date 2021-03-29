import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresstaperheadchecklistPageRoutingModule } from './presstaperheadchecklist-routing.module';

import { PresstaperheadchecklistPage } from './presstaperheadchecklist.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PresstaperheadchecklistPageRoutingModule
  ],
  declarations: [PresstaperheadchecklistPage]
})
export class PresstaperheadchecklistPageModule {}
