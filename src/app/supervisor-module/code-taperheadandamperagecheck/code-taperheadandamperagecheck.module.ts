import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeTaperheadandamperagecheckPageRoutingModule } from './code-taperheadandamperagecheck-routing.module';

import { CodeTaperheadandamperagecheckPage } from './code-taperheadandamperagecheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeTaperheadandamperagecheckPageRoutingModule
  ],
  declarations: [CodeTaperheadandamperagecheckPage]
})
export class CodeTaperheadandamperagecheckPageModule {}
