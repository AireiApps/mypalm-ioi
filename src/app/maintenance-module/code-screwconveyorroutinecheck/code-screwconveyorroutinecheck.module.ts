import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeScrewconveyorroutinecheckPageRoutingModule } from './code-screwconveyorroutinecheck-routing.module';

import { CodeScrewconveyorroutinecheckPage } from './code-screwconveyorroutinecheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeScrewconveyorroutinecheckPageRoutingModule
  ],
  declarations: [CodeScrewconveyorroutinecheckPage]
})
export class CodeScrewconveyorroutinecheckPageModule {}
