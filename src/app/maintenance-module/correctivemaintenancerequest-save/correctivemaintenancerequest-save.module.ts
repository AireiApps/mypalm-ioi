import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenancerequestSavePageRoutingModule } from './correctivemaintenancerequest-save-routing.module';

import { CorrectivemaintenancerequestSavePage } from './correctivemaintenancerequest-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenancerequestSavePageRoutingModule
  ],
  declarations: [CorrectivemaintenancerequestSavePage]
})
export class CorrectivemaintenancerequestSavePageModule {}
