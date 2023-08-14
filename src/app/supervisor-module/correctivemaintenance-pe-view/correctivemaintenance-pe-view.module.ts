import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenancePeViewPageRoutingModule } from './correctivemaintenance-pe-view-routing.module';

import { CorrectivemaintenancePeViewPage } from './correctivemaintenance-pe-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorrectivemaintenancePeViewPageRoutingModule
  ],
  declarations: [CorrectivemaintenancePeViewPage]
})
export class CorrectivemaintenancePeViewPageModule {}
