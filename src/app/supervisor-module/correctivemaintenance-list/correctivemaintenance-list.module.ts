import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceListPageRoutingModule } from './correctivemaintenance-list-routing.module';

import { CorrectivemaintenanceListPage } from './correctivemaintenance-list.page';

import { OvalShapeModule } from 'src/app/component/ux/oval-shape/oval-shape.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvalShapeModule,
    CorrectivemaintenanceListPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceListPage]
})
export class CorrectivemaintenanceListPageModule {}
