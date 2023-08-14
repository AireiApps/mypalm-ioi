import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportWebviewPageRoutingModule } from './report-webview-routing.module';

import { ReportWebviewPage } from './report-webview.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    ReportWebviewPageRoutingModule
  ],
  declarations: [ReportWebviewPage]
})
export class ReportWebviewPageModule {}
