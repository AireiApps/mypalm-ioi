import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorBroadcastchatPageRoutingModule } from './supervisor-broadcastchat-routing.module';

import { SupervisorBroadcastchatPage } from './supervisor-broadcastchat.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    SupervisorBroadcastchatPageRoutingModule
  ],
  declarations: [SupervisorBroadcastchatPage]
})
export class SupervisorBroadcastchatPageModule {}
