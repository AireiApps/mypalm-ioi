import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeDustcollectorcheckPageRoutingModule } from './code-dustcollectorcheck-routing.module';

import { CodeDustcollectorcheckPage } from './code-dustcollectorcheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeDustcollectorcheckPageRoutingModule
  ],
  declarations: [CodeDustcollectorcheckPage]
})
export class CodeDustcollectorcheckPageModule {}
