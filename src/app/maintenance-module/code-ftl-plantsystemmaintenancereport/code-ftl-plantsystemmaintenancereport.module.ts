import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeFtlPlantsystemmaintenancereportPageRoutingModule } from './code-ftl-plantsystemmaintenancereport-routing.module';

import { CodeFtlPlantsystemmaintenancereportPage } from './code-ftl-plantsystemmaintenancereport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeFtlPlantsystemmaintenancereportPageRoutingModule
  ],
  declarations: [CodeFtlPlantsystemmaintenancereportPage]
})
export class CodeFtlPlantsystemmaintenancereportPageModule {}
