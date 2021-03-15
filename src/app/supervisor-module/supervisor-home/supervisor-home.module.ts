import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorHomePageRoutingModule } from './supervisor-home-routing.module';

import { SupervisorHomePage } from './supervisor-home.page';

import { TranslateModule } from "@ngx-translate/core";

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    SupervisorHomePageRoutingModule,
    TranslateModule
  ],
  declarations: [SupervisorHomePage]
})
export class SupervisorHomePageModule {}
