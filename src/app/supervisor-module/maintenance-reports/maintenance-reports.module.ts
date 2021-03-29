import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceReportsPageRoutingModule } from './maintenance-reports-routing.module';

import { MaintenanceReportsPage } from './maintenance-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceReportsPageRoutingModule
  ],
  declarations: [MaintenanceReportsPage]
})
export class MaintenanceReportsPageModule {}
