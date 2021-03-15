import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OvalShapeComponent } from './oval-shape.component';



@NgModule({
  declarations: [OvalShapeComponent],
  imports: [
    CommonModule
  ], exports: [
    OvalShapeComponent
  ], entryComponents: [
    OvalShapeComponent
  ]
})
export class OvalShapeModule { }
