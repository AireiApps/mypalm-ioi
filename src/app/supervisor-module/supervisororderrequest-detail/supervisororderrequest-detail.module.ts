import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SupervisororderrequestDetailPageRoutingModule } from "./supervisororderrequest-detail-routing.module";

import { SupervisororderrequestDetailPage } from "./supervisororderrequest-detail.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SupervisororderrequestDetailPageRoutingModule,
  ],
  declarations: [SupervisororderrequestDetailPage],
})
export class SupervisororderrequestDetailPageModule {}
