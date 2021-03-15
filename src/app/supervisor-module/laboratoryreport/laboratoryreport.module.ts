import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratoryreportPageRoutingModule } from './laboratoryreport-routing.module';

import { LaboratoryreportPage } from './laboratoryreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule,
    LaboratoryreportPageRoutingModule
  ],
  declarations: [LaboratoryreportPage]
})
export class LaboratoryreportPageModule {}
