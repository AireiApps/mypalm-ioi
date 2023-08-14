import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotcheckPageRoutingModule } from './spotcheck-routing.module';

import { SpotcheckPage } from './spotcheck.page';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SpotcheckPageRoutingModule
  ],
  declarations: [SpotcheckPage]
})
export class SpotcheckPageModule {}
