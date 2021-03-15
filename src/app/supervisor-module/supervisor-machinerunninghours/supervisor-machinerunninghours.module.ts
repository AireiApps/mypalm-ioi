import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorMachinerunninghoursPageRoutingModule } from './supervisor-machinerunninghours-routing.module';

import { SupervisorMachinerunninghoursPage } from './supervisor-machinerunninghours.page';

import { SharedModule } from 'src/app/shared/shared.module';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule,
    SupervisorMachinerunninghoursPageRoutingModule
  ],
  declarations: [SupervisorMachinerunninghoursPage]
})
export class SupervisorMachinerunninghoursPageModule {}
