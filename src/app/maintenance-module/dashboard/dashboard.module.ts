import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DashboardPageRoutingModule } from "./dashboard-routing.module";

import { DashboardPage } from "./dashboard.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    TranslateModule,
  ],
  declarations: [DashboardPage],
})
export class DashboardPageModule {}
