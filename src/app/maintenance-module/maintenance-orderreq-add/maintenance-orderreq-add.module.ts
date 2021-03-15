import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceOrderreqAddPageRoutingModule } from './maintenance-orderreq-add-routing.module';

import { MaintenanceOrderreqAddPage } from './maintenance-orderreq-add.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MaintenanceOrderreqAddPageRoutingModule,
    TranslateModule
  ],
  declarations: [MaintenanceOrderreqAddPage]
})
export class MaintenanceOrderreqAddPageModule {}
