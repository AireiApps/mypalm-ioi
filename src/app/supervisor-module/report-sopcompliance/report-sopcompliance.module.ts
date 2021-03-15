import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ReportSopcompliancePageRoutingModule } from "./report-sopcompliance-routing.module";

import { ReportSopcompliancePage } from "./report-sopcompliance.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    ReportSopcompliancePageRoutingModule,
  ],
  declarations: [ReportSopcompliancePage],
})
export class ReportSopcompliancePageModule {}
