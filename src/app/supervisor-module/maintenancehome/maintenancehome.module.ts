import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancehomePageRoutingModule } from './maintenancehome-routing.module';

import { MaintenancehomePage } from './maintenancehome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancehomePageRoutingModule
  ],
  declarations: [MaintenancehomePage]
})
export class MaintenancehomePageModule {}
