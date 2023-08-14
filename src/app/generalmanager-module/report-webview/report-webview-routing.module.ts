import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportWebviewPage } from './report-webview.page';

const routes: Routes = [
  {
    path: '',
    component: ReportWebviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportWebviewPageRoutingModule {}
