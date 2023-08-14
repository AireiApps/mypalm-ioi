import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceresponsePartsPageRoutingModule } from './correctivemaintenanceresponse-parts-routing.module';

import { CorrectivemaintenanceresponsePartsPage } from './correctivemaintenanceresponse-parts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenanceresponsePartsPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceresponsePartsPage]
})
export class CorrectivemaintenanceresponsePartsPageModule {}
