import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobdonereportPageRoutingModule } from './jobdonereport-routing.module';

import { JobdonereportPage } from './jobdonereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    JobdonereportPageRoutingModule
  ],
  declarations: [JobdonereportPage]
})
export class JobdonereportPageModule {}
