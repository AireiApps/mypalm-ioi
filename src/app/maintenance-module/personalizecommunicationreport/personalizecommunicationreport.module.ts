import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizecommunicationreportPageRoutingModule } from './personalizecommunicationreport-routing.module';

import { PersonalizecommunicationreportPage } from './personalizecommunicationreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    PersonalizecommunicationreportPageRoutingModule
  ],
  declarations: [PersonalizecommunicationreportPage]
})
export class PersonalizecommunicationreportPageModule {}
