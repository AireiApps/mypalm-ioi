import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreventivemaintenanceDetailPageRoutingModule } from './preventivemaintenance-detail-routing.module';

import { PreventivemaintenanceDetailPage } from './preventivemaintenance-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PreventivemaintenanceDetailPageRoutingModule
  ],
  declarations: [PreventivemaintenanceDetailPage]
})
export class PreventivemaintenanceDetailPageModule {}
