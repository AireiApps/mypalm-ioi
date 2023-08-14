import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceResponsePageRoutingModule } from './correctivemaintenance-response-routing.module';

import { CorrectivemaintenanceResponsePage } from './correctivemaintenance-response.page';

import { OvalShapeModule } from 'src/app/component/ux/oval-shape/oval-shape.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvalShapeModule,
    CorrectivemaintenanceResponsePageRoutingModule
  ],
  declarations: [CorrectivemaintenanceResponsePage]
})
export class CorrectivemaintenanceResponsePageModule {}
