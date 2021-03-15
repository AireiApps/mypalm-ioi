import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceDetailPageRoutingModule } from './maintenance-detail-routing.module';

import { MaintenanceDetailPage } from './maintenance-detail.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MaintenanceDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [MaintenanceDetailPage]
})
export class MaintenanceDetailPageModule {}
