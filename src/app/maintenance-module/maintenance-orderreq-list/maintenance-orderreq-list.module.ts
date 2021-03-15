import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceOrderreqListPageRoutingModule } from './maintenance-orderreq-list-routing.module';

import { MaintenanceOrderreqListPage } from './maintenance-orderreq-list.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceOrderreqListPageRoutingModule,
    TranslateModule
  ],
  declarations: [MaintenanceOrderreqListPage]
})
export class MaintenanceOrderreqListPageModule {}
