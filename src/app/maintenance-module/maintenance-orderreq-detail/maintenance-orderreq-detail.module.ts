import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceOrderreqDetailPageRoutingModule } from './maintenance-orderreq-detail-routing.module';

import { MaintenanceOrderreqDetailPage } from './maintenance-orderreq-detail.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceOrderreqDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [MaintenanceOrderreqDetailPage]
})
export class MaintenanceOrderreqDetailPageModule {}
