import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveformPageRoutingModule } from './leaveform-routing.module';

import { LeaveformPage } from './leaveform.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    LeaveformPageRoutingModule
  ],
  declarations: [LeaveformPage]
})
export class LeaveformPageModule {}
