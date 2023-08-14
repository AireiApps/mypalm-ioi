import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodePressmachinemaintenancereportPageRoutingModule } from './code-pressmachinemaintenancereport-routing.module';

import { CodePressmachinemaintenancereportPage } from './code-pressmachinemaintenancereport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodePressmachinemaintenancereportPageRoutingModule
  ],
  declarations: [CodePressmachinemaintenancereportPage]
})
export class CodePressmachinemaintenancereportPageModule {}
