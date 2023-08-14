import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceHomePageRoutingModule } from './correctivemaintenance-home-routing.module';

import { CorrectivemaintenanceHomePage } from './correctivemaintenance-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrectivemaintenanceHomePageRoutingModule
  ],
  declarations: [CorrectivemaintenanceHomePage]
})
export class CorrectivemaintenanceHomePageModule {}
