import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceMeListPageRoutingModule } from './correctivemaintenance-me-list-routing.module';

import { CorrectivemaintenanceMeListPage } from './correctivemaintenance-me-list.page';

import { OvalShapeModule } from 'src/app/component/ux/oval-shape/oval-shape.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvalShapeModule,
    CorrectivemaintenanceMeListPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceMeListPage]
})
export class CorrectivemaintenanceMeListPageModule {}
