import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeFtlPressmachinemaintenancereportPageRoutingModule } from './code-ftl-pressmachinemaintenancereport-routing.module';

import { CodeFtlPressmachinemaintenancereportPage } from './code-ftl-pressmachinemaintenancereport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeFtlPressmachinemaintenancereportPageRoutingModule
  ],
  declarations: [CodeFtlPressmachinemaintenancereportPage]
})
export class CodeFtlPressmachinemaintenancereportPageModule {}
