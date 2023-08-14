import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dashoboard2PageRoutingModule } from './dashoboard2-routing.module';

import { Dashoboard2Page } from './dashoboard2.page';

import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    Dashoboard2PageRoutingModule
  ],
  declarations: [Dashoboard2Page]
})
export class Dashoboard2PageModule {}
