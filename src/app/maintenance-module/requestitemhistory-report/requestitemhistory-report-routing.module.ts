import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestitemhistoryReportPage } from './requestitemhistory-report.page';

const routes: Routes = [
  {
    path: '',
    component: RequestitemhistoryReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestitemhistoryReportPageRoutingModule {}
