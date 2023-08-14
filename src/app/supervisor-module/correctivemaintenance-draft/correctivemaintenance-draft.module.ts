import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceDraftPageRoutingModule } from './correctivemaintenance-draft-routing.module';

import { CorrectivemaintenanceDraftPage } from './correctivemaintenance-draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenanceDraftPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceDraftPage]
})
export class CorrectivemaintenanceDraftPageModule {}
