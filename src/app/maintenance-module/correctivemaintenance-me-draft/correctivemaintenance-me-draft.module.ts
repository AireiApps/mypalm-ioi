import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceMeDraftPageRoutingModule } from './correctivemaintenance-me-draft-routing.module';

import { CorrectivemaintenanceMeDraftPage } from './correctivemaintenance-me-draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenanceMeDraftPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceMeDraftPage]
})
export class CorrectivemaintenanceMeDraftPageModule {}
