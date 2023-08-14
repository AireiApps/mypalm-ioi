import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulemaintenancePageRoutingModule } from './schedulemaintenance-routing.module';

import { SchedulemaintenancePage } from './schedulemaintenance.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SchedulemaintenancePageRoutingModule
  ],
  declarations: [SchedulemaintenancePage]
})
export class SchedulemaintenancePageModule {}
