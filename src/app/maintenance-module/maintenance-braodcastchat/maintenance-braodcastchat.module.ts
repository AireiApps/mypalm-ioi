import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceBraodcastchatPageRoutingModule } from './maintenance-braodcastchat-routing.module';

import { MaintenanceBraodcastchatPage } from './maintenance-braodcastchat.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MaintenanceBraodcastchatPageRoutingModule,
    TranslateModule
  ],
  declarations: [MaintenanceBraodcastchatPage]
})
export class MaintenanceBraodcastchatPageModule {}
