import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeMagnetictrapscheckPageRoutingModule } from './code-magnetictrapscheck-routing.module';

import { CodeMagnetictrapscheckPage } from './code-magnetictrapscheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeMagnetictrapscheckPageRoutingModule
  ],
  declarations: [CodeMagnetictrapscheckPage]
})
export class CodeMagnetictrapscheckPageModule {}
