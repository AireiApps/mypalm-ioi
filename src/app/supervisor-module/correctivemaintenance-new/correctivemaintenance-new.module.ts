import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceNewPageRoutingModule } from './correctivemaintenance-new-routing.module';

import { CorrectivemaintenanceNewPage } from './correctivemaintenance-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenanceNewPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceNewPage]
})
export class CorrectivemaintenanceNewPageModule {}
