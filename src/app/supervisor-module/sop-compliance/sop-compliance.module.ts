import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SopCompliancePageRoutingModule } from './sop-compliance-routing.module';

import { SopCompliancePage } from './sop-compliance.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SopCompliancePageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [SopCompliancePage]
})
export class SopCompliancePageModule {}
