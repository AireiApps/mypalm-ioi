import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceNewDraftPageRoutingModule } from './correctivemaintenance-new-draft-routing.module';

import { CorrectivemaintenanceNewDraftPage } from './correctivemaintenance-new-draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenanceNewDraftPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceNewDraftPage]
})
export class CorrectivemaintenanceNewDraftPageModule {}
