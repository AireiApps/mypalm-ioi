import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MaintenanceReportedmaintenanceNewPageRoutingModule } from "./maintenance-reportedmaintenance-new-routing.module";

import { MaintenanceReportedmaintenanceNewPage } from "./maintenance-reportedmaintenance-new.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    MaintenanceReportedmaintenanceNewPageRoutingModule,
  ],
  declarations: [MaintenanceReportedmaintenanceNewPage],
})
export class MaintenanceReportedmaintenanceNewPageModule {}
