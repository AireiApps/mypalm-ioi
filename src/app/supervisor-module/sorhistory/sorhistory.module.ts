import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorhistoryPageRoutingModule } from './sorhistory-routing.module';

import { SorhistoryPage } from './sorhistory.page';

import { SharedModule } from 'src/app/shared/shared.module';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule,
    SorhistoryPageRoutingModule
  ],
  declarations: [SorhistoryPage]
})
export class SorhistoryPageModule {}
