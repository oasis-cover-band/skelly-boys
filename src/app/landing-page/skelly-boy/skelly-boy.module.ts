import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkellyBoyComponent } from './skelly-boy.component';



@NgModule({
  declarations: [SkellyBoyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SkellyBoyComponent
  ]
})
export class SkellyBoyModule { }
