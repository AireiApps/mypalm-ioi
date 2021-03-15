import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SupervisorHomePageRoutingModule } from "./supervisor-home-routing.module";

import { SupervisorHomePage } from "./supervisor-home.page";

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SupervisorHomePageRoutingModule,
  ],
  declarations: [SupervisorHomePage],
})
export class SupervisorHomePageModule {}
