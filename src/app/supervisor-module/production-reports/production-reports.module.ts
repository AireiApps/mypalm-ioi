import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionReportsPageRoutingModule } from './production-reports-routing.module';

import { ProductionReportsPage } from './production-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductionReportsPageRoutingModule
  ],
  declarations: [ProductionReportsPage]
})
export class ProductionReportsPageModule {}
