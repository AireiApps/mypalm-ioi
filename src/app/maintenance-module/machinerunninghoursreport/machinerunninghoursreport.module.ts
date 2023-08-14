import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinerunninghoursreportPageRoutingModule } from './machinerunninghoursreport-routing.module';

import { MachinerunninghoursreportPage } from './machinerunninghoursreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MachinerunninghoursreportPageRoutingModule
  ],
  declarations: [MachinerunninghoursreportPage]
})
export class MachinerunninghoursreportPageModule {}
