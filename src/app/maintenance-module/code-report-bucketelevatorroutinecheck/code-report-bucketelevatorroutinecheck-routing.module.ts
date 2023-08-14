import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReportBucketelevatorroutinecheckPage } from './code-report-bucketelevatorroutinecheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReportBucketelevatorroutinecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReportBucketelevatorroutinecheckPageRoutingModule {}
