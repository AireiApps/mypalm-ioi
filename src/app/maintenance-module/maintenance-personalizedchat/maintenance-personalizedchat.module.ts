import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancePersonalizedchatPageRoutingModule } from './maintenance-personalizedchat-routing.module';

import { MaintenancePersonalizedchatPage } from './maintenance-personalizedchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MaintenancePersonalizedchatPageRoutingModule
  ],
  declarations: [MaintenancePersonalizedchatPage]
})
export class MaintenancePersonalizedchatPageModule {}
