import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BroadcastcommunicationreportPageRoutingModule } from './broadcastcommunicationreport-routing.module';

import { BroadcastcommunicationreportPage } from './broadcastcommunicationreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BroadcastcommunicationreportPageRoutingModule
  ],
  declarations: [BroadcastcommunicationreportPage]
})
export class BroadcastcommunicationreportPageModule {}
