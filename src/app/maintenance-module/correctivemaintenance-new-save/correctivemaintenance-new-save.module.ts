import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceNewSavePageRoutingModule } from './correctivemaintenance-new-save-routing.module';

import { CorrectivemaintenanceNewSavePage } from './correctivemaintenance-new-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenanceNewSavePageRoutingModule
  ],
  declarations: [CorrectivemaintenanceNewSavePage]
})
export class CorrectivemaintenanceNewSavePageModule {}
