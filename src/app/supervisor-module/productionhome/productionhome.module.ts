import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionhomePageRoutingModule } from './productionhome-routing.module';

import { ProductionhomePage } from './productionhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductionhomePageRoutingModule
  ],
  declarations: [ProductionhomePage]
})
export class ProductionhomePageModule {}
