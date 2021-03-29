import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorHistoryPageRoutingModule } from './supervisor-history-routing.module';

import { SupervisorHistoryPage } from './supervisor-history.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SupervisorHistoryPageRoutingModule
  ],
  declarations: [SupervisorHistoryPage]
})
export class SupervisorHistoryPageModule {}
