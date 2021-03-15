import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancePersonalizedchatdepartmentsPageRoutingModule } from './maintenance-personalizedchatdepartments-routing.module';

import { MaintenancePersonalizedchatdepartmentsPage } from './maintenance-personalizedchatdepartments.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancePersonalizedchatdepartmentsPageRoutingModule,
    TranslateModule
  ],
  declarations: [MaintenancePersonalizedchatdepartmentsPage]
})
export class MaintenancePersonalizedchatdepartmentsPageModule {}
