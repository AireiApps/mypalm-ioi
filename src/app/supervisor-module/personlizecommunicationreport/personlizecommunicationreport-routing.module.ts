import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonlizecommunicationreportPage } from './personlizecommunicationreport.page';

const routes: Routes = [
  {
    path: '',
    component: PersonlizecommunicationreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonlizecommunicationreportPageRoutingModule {}
