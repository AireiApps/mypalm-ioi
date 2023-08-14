import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceRequestPageRoutingModule } from './correctivemaintenance-request-routing.module';

import { CorrectivemaintenanceRequestPage } from './correctivemaintenance-request.page';

import { OvalShapeModule } from 'src/app/component/ux/oval-shape/oval-shape.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvalShapeModule,
    CorrectivemaintenanceRequestPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceRequestPage]
})
export class CorrectivemaintenanceRequestPageModule {}
