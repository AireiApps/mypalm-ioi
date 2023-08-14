import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DailyActivitylogPageRoutingModule } from "./daily-activitylog-routing.module";

import { DailyActivitylogPage } from "./daily-activitylog.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DailyActivitylogPageRoutingModule,
  ],
  declarations: [DailyActivitylogPage],
})
export class DailyActivitylogPageModule {}
