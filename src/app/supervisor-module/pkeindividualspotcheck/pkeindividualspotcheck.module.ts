import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PkeindividualspotcheckPageRoutingModule } from './pkeindividualspotcheck-routing.module';

import { PkeindividualspotcheckPage } from './pkeindividualspotcheck.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PkeindividualspotcheckPageRoutingModule
  ],
  declarations: [PkeindividualspotcheckPage]
})
export class PkeindividualspotcheckPageModule {}
