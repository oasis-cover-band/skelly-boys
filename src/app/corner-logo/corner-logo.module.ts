import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CornerLogoComponent } from './corner-logo.component';



@NgModule({
  declarations: [CornerLogoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CornerLogoComponent
  ]
})
export class CornerLogoModule { }
