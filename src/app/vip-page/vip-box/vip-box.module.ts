import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VipBoxComponent } from './vip-box.component';



@NgModule({
  declarations: [VipBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    VipBoxComponent
  ]
})
export class VipBoxModule { }
