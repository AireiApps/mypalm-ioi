import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceorderDetailsPageRoutingModule } from './maintenanceorder-details-routing.module';

import { MaintenanceorderDetailsPage } from './maintenanceorder-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceorderDetailsPageRoutingModule
  ],
  declarations: [MaintenanceorderDetailsPage]
})
export class MaintenanceorderDetailsPageModule {}
