import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MaintenanceJobdonereportPageRoutingModule } from "./maintenance-jobdonereport-routing.module";

import { MaintenanceJobdonereportPage } from "./maintenance-jobdonereport.page";

import { SharedModule } from "src/app/shared/shared.module";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule,
    MaintenanceJobdonereportPageRoutingModule,
  ],
  declarations: [MaintenanceJobdonereportPage],
})
export class MaintenanceJobdonereportPageModule {}
