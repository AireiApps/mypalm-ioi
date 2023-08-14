import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceresponseSavePageRoutingModule } from './correctivemaintenanceresponse-save-routing.module';

import { CorrectivemaintenanceresponseSavePage } from './correctivemaintenanceresponse-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenanceresponseSavePageRoutingModule
  ],
  declarations: [CorrectivemaintenanceresponseSavePage]
})
export class CorrectivemaintenanceresponseSavePageModule {}
