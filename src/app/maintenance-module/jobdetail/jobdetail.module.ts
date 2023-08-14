import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobdetailPageRoutingModule } from './jobdetail-routing.module';

import { JobdetailPage } from './jobdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JobdetailPageRoutingModule
  ],
  declarations: [JobdetailPage]
})
export class JobdetailPageModule {}
