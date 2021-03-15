import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceChecklistPageRoutingModule } from './maintenance-checklist-routing.module';

import { MaintenanceChecklistPage } from './maintenance-checklist.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MaintenanceChecklistPageRoutingModule
  ],
  declarations: [MaintenanceChecklistPage]
})
export class MaintenanceChecklistPageModule {}
