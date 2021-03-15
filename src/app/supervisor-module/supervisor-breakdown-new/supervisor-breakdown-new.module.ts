import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorBreakdownNewPageRoutingModule } from './supervisor-breakdown-new-routing.module';

import { SupervisorBreakdownNewPage } from './supervisor-breakdown-new.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    SupervisorBreakdownNewPageRoutingModule
  ],
  declarations: [SupervisorBreakdownNewPage]
})
export class SupervisorBreakdownNewPageModule {}
