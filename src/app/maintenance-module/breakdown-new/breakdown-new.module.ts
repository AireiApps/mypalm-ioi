import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreakdownNewPageRoutingModule } from './breakdown-new-routing.module';

import { BreakdownNewPage } from './breakdown-new.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BreakdownNewPageRoutingModule,
    TranslateModule
  ],
  declarations: [BreakdownNewPage]
})
export class BreakdownNewPageModule {}
