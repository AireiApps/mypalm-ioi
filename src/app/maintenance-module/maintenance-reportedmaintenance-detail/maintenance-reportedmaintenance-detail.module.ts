import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MaintenanceReportedmaintenanceDetailPageRoutingModule } from "./maintenance-reportedmaintenance-detail-routing.module";

import { MaintenanceReportedmaintenanceDetailPage } from "./maintenance-reportedmaintenance-detail.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    MaintenanceReportedmaintenanceDetailPageRoutingModule,
  ],
  declarations: [MaintenanceReportedmaintenanceDetailPage],
})
export class MaintenanceReportedmaintenanceDetailPageModule {}
