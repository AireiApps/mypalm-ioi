import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ReportHourlyreportingPageRoutingModule } from "./report-hourlyreporting-routing.module";

import { ReportHourlyreportingPage } from "./report-hourlyreporting.page";

import { TranslateModule } from "@ngx-translate/core";

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    ReportHourlyreportingPageRoutingModule,
  ],
  declarations: [ReportHourlyreportingPage],
})
export class ReportHourlyreportingPageModule {}
