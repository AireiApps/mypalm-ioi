import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorProductionreportPageRoutingModule } from './supervisor-productionreport-routing.module';

import { SupervisorProductionreportPage } from './supervisor-productionreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule,
    SupervisorProductionreportPageRoutingModule
  ],
  declarations: [SupervisorProductionreportPage]
})
export class SupervisorProductionreportPageModule {}
