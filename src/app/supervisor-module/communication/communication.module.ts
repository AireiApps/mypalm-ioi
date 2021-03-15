import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CommunicationPageRoutingModule } from "./communication-routing.module";

import { CommunicationPage } from "./communication.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunicationPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [CommunicationPage],
})
export class CommunicationPageModule {}
