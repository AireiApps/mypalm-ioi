import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SupervisorBreakdownListPageRoutingModule } from "./supervisor-breakdown-list-routing.module";

import { SupervisorBreakdownListPage } from "./supervisor-breakdown-list.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SupervisorBreakdownListPageRoutingModule,
  ],
  declarations: [SupervisorBreakdownListPage],
})
export class SupervisorBreakdownListPageModule {}
