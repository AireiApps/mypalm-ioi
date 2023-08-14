import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobbyengineerPageRoutingModule } from './jobbyengineer-routing.module';

import { JobbyengineerPage } from './jobbyengineer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobbyengineerPageRoutingModule
  ],
  declarations: [JobbyengineerPage]
})
export class JobbyengineerPageModule {}
