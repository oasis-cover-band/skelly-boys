import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StampLogoComponent } from './stamp-logo.component';



@NgModule({
  declarations: [StampLogoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StampLogoComponent
  ]
})
export class StampLogoModule { }
