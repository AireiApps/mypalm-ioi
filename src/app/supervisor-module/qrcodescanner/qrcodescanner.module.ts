import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { QrcodescannerPageRoutingModule } from "./qrcodescanner-routing.module";

import { QrcodescannerPage } from "./qrcodescanner.page";

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    QrcodescannerPageRoutingModule,
  ],
  declarations: [QrcodescannerPage],
})
export class QrcodescannerPageModule {}
