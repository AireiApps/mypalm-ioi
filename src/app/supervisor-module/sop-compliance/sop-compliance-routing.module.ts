import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SopCompliancePage } from './sop-compliance.page';

const routes: Routes = [
  {
    path: '',
    component: SopCompliancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SopCompliancePageRoutingModule {}
