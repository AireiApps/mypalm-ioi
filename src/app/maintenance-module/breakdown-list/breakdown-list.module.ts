import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreakdownListPageRoutingModule } from './breakdown-list-routing.module';

import { BreakdownListPage } from './breakdown-list.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreakdownListPageRoutingModule,
    TranslateModule
  ],
  declarations: [BreakdownListPage]
})
export class BreakdownListPageModule {}
