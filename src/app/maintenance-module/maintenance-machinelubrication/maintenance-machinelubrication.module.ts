import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceMachinelubricationPageRoutingModule } from './maintenance-machinelubrication-routing.module';

import { MaintenanceMachinelubricationPage } from './maintenance-machinelubrication.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MaintenanceMachinelubricationPageRoutingModule
  ],
  declarations: [MaintenanceMachinelubricationPage]
})
export class MaintenanceMachinelubricationPageModule {}
