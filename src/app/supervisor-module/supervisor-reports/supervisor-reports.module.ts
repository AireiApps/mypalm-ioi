import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorReportsPageRoutingModule } from './supervisor-reports-routing.module';

import { SupervisorReportsPage } from './supervisor-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupervisorReportsPageRoutingModule
  ],
  declarations: [SupervisorReportsPage]
})
export class SupervisorReportsPageModule {}
