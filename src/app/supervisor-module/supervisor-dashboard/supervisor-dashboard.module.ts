import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorDashboardPageRoutingModule } from './supervisor-dashboard-routing.module';

import { SupervisorDashboardPage } from './supervisor-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SupervisorDashboardPageRoutingModule    
  ],
  declarations: [SupervisorDashboardPage]
})
export class SupervisorDashboardPageModule {}
