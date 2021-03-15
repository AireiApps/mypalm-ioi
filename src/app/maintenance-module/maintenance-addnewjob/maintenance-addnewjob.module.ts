import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceAddnewjobPageRoutingModule } from './maintenance-addnewjob-routing.module';

import { MaintenanceAddnewjobPage } from './maintenance-addnewjob.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MaintenanceAddnewjobPageRoutingModule,
    TranslateModule
  ],
  declarations: [MaintenanceAddnewjobPage]
})
export class MaintenanceAddnewjobPageModule {}
