import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinerunninghoursUpdatePageRoutingModule } from './machinerunninghours-update-routing.module';

import { MachinerunninghoursUpdatePage } from './machinerunninghours-update.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MachinerunninghoursUpdatePageRoutingModule
  ],
  declarations: [MachinerunninghoursUpdatePage]
})
export class MachinerunninghoursUpdatePageModule {}
