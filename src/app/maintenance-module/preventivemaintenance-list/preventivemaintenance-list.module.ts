import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreventivemaintenanceListPageRoutingModule } from './preventivemaintenance-list-routing.module';

import { PreventivemaintenanceListPage } from './preventivemaintenance-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreventivemaintenanceListPageRoutingModule
  ],
  declarations: [PreventivemaintenanceListPage]
})
export class PreventivemaintenanceListPageModule {}
