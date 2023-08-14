import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredictivemaintenancePageRoutingModule } from './predictivemaintenance-routing.module';

import { PredictivemaintenancePage } from './predictivemaintenance.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PredictivemaintenancePageRoutingModule
  ],
  declarations: [PredictivemaintenancePage]
})
export class PredictivemaintenancePageModule {}
