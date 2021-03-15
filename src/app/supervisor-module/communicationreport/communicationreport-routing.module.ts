import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunicationreportPage } from './communicationreport.page';

const routes: Routes = [
  {
    path: '',
    component: CommunicationreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunicationreportPageRoutingModule {}
