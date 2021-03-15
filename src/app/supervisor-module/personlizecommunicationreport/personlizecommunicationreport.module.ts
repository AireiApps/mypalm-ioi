import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonlizecommunicationreportPageRoutingModule } from './personlizecommunicationreport-routing.module';

import { PersonlizecommunicationreportPage } from './personlizecommunicationreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PersonlizecommunicationreportPageRoutingModule
  ],
  declarations: [PersonlizecommunicationreportPage]
})
export class PersonlizecommunicationreportPageModule {}
