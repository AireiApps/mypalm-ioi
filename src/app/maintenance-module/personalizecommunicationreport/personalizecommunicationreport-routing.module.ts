import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizecommunicationreportPage } from './personalizecommunicationreport.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizecommunicationreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizecommunicationreportPageRoutingModule {}
