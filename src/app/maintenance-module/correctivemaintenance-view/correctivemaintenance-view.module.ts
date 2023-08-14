import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceViewPageRoutingModule } from './correctivemaintenance-view-routing.module';

import { CorrectivemaintenanceViewPage } from './correctivemaintenance-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenanceViewPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceViewPage]
})
export class CorrectivemaintenanceViewPageModule {}
