import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceNewListPageRoutingModule } from './correctivemaintenance-new-list-routing.module';

import { CorrectivemaintenanceNewListPage } from './correctivemaintenance-new-list.page';

import { OvalShapeModule } from 'src/app/component/ux/oval-shape/oval-shape.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvalShapeModule,
    CorrectivemaintenanceNewListPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceNewListPage]
})
export class CorrectivemaintenanceNewListPageModule {}
