import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodePlantsystemmaintenancereportPageRoutingModule } from './code-plantsystemmaintenancereport-routing.module';

import { CodePlantsystemmaintenancereportPage } from './code-plantsystemmaintenancereport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodePlantsystemmaintenancereportPageRoutingModule
  ],
  declarations: [CodePlantsystemmaintenancereportPage]
})
export class CodePlantsystemmaintenancereportPageModule {}
