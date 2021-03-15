import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisororderrequestListPageRoutingModule } from './supervisororderrequest-list-routing.module';

import { SupervisororderrequestListPage } from './supervisororderrequest-list.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SupervisororderrequestListPageRoutingModule
  ],
  declarations: [SupervisororderrequestListPage]
})
export class SupervisororderrequestListPageModule {}
