import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporthomePageRoutingModule } from './reporthome-routing.module';

import { ReporthomePage } from './reporthome.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporthomePageRoutingModule,
    TranslateModule
  ],
  declarations: [ReporthomePage]
})
export class ReporthomePageModule {}
