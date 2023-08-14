import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceRequestNotassignedSavePageRoutingModule } from './correctivemaintenance-request-notassigned-save-routing.module';

import { CorrectivemaintenanceRequestNotassignedSavePage } from './correctivemaintenance-request-notassigned-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenanceRequestNotassignedSavePageRoutingModule
  ],
  declarations: [CorrectivemaintenanceRequestNotassignedSavePage]
})
export class CorrectivemaintenanceRequestNotassignedSavePageModule {}
