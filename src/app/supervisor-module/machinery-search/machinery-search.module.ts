import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinerySearchPageRoutingModule } from './machinery-search-routing.module';

import { MachinerySearchPage } from './machinery-search.page';

import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    MachinerySearchPageRoutingModule
  ],
  declarations: [MachinerySearchPage]
})
export class MachinerySearchPageModule {}
