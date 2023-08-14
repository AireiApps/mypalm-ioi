import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorMachinelubricationPageRoutingModule } from './supervisor-machinelubrication-routing.module';

import { SupervisorMachinelubricationPage } from './supervisor-machinelubrication.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SupervisorMachinelubricationPageRoutingModule
  ],
  declarations: [SupervisorMachinelubricationPage]
})
export class SupervisorMachinelubricationPageModule {}
