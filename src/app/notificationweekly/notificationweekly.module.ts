import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationweeklyPageRoutingModule } from './notificationweekly-routing.module';

import { NotificationweeklyPage } from './notificationweekly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationweeklyPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NotificationweeklyPage]
})
export class NotificationweeklyPageModule {}
