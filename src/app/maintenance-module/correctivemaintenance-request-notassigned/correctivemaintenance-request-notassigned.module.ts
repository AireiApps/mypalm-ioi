import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenanceRequestNotassignedPageRoutingModule } from './correctivemaintenance-request-notassigned-routing.module';

import { CorrectivemaintenanceRequestNotassignedPage } from './correctivemaintenance-request-notassigned.page';

import { OvalShapeModule } from 'src/app/component/ux/oval-shape/oval-shape.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvalShapeModule,
    CorrectivemaintenanceRequestNotassignedPageRoutingModule
  ],
  declarations: [CorrectivemaintenanceRequestNotassignedPage]
})
export class CorrectivemaintenanceRequestNotassignedPageModule {}
