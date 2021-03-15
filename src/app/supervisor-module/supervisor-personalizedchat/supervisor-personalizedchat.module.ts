import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorPersonalizedchatPageRoutingModule } from './supervisor-personalizedchat-routing.module';

import { SupervisorPersonalizedchatPage } from './supervisor-personalizedchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SupervisorPersonalizedchatPageRoutingModule
  ],
  declarations: [SupervisorPersonalizedchatPage]
})
export class SupervisorPersonalizedchatPageModule {}
