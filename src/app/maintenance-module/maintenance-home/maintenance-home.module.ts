import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceHomePageRoutingModule } from './maintenance-home-routing.module';

import { MaintenanceHomePage } from './maintenance-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceHomePageRoutingModule
  ],
  declarations: [MaintenanceHomePage]
})
export class MaintenanceHomePageModule {}
