import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectivemaintenancereportPageRoutingModule } from './correctivemaintenancereport-routing.module';

import { CorrectivemaintenancereportPage } from './correctivemaintenancereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CorrectivemaintenancereportPageRoutingModule
  ],
  declarations: [CorrectivemaintenancereportPage]
})
export class CorrectivemaintenancereportPageModule {}
