import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dashboard1PageRoutingModule } from './dashboard1-routing.module';

import { Dashboard1Page } from './dashboard1.page';

import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    Dashboard1PageRoutingModule
  ],
  declarations: [Dashboard1Page]
})
export class Dashboard1PageModule {}
