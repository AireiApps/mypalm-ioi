import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorBreakdownDetailPageRoutingModule } from './supervisor-breakdown-detail-routing.module';

import { SupervisorBreakdownDetailPage } from './supervisor-breakdown-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SupervisorBreakdownDetailPageRoutingModule
  ],
  declarations: [SupervisorBreakdownDetailPage]
})
export class SupervisorBreakdownDetailPageModule {}
