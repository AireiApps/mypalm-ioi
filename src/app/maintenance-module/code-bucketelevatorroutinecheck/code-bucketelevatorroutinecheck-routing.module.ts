import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeBucketelevatorroutinecheckPage } from './code-bucketelevatorroutinecheck.page';

const routes: Routes = [
  {
    path: '',
    component: CodeBucketelevatorroutinecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeBucketelevatorroutinecheckPageRoutingModule {}
