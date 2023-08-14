import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceMeNewPageRoutingModule } from './correctivemaintenance-me-new-routing.module';

import { CorrectivemaintenanceMeNewPage } from './correctivemaintenance-me-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenanceMeNewPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceMeNewPage]
})
export class CorrectivemaintenanceMeNewPageModule {}
