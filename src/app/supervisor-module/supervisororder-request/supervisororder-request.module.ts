import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisororderRequestPageRoutingModule } from './supervisororder-request-routing.module';

import { SupervisororderRequestPage } from './supervisororder-request.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    SupervisororderRequestPageRoutingModule
  ],
  declarations: [SupervisororderRequestPage]
})
export class SupervisororderRequestPageModule {}
