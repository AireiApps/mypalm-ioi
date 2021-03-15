import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorChecklistPageRoutingModule } from './supervisor-checklist-routing.module';

import { SupervisorChecklistPage } from './supervisor-checklist.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SupervisorChecklistPageRoutingModule
  ],
  declarations: [SupervisorChecklistPage]
})
export class SupervisorChecklistPageModule {}
