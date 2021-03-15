import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreventivemaintenancereportPageRoutingModule } from './preventivemaintenancereport-routing.module';

import { PreventivemaintenancereportPage } from './preventivemaintenancereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PreventivemaintenancereportPageRoutingModule
  ],
  declarations: [PreventivemaintenancereportPage]
})
export class PreventivemaintenancereportPageModule {}
