import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceReportedmaintenanceListPageRoutingModule } from './maintenance-reportedmaintenance-list-routing.module';

import { MaintenanceReportedmaintenanceListPage } from './maintenance-reportedmaintenance-list.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MaintenanceReportedmaintenanceListPageRoutingModule
  ],
  declarations: [MaintenanceReportedmaintenanceListPage]
})
export class MaintenanceReportedmaintenanceListPageModule {}
