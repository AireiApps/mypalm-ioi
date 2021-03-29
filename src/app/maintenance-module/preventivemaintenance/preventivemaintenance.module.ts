import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreventivemaintenancePageRoutingModule } from './preventivemaintenance-routing.module';

import { PreventivemaintenancePage } from './preventivemaintenance.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PreventivemaintenancePageRoutingModule
  ],
  declarations: [PreventivemaintenancePage]
})
export class PreventivemaintenancePageModule {}
