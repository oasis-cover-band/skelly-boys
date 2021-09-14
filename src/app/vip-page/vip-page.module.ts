import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VipPageComponent } from './vip-page.component';
import { VipBoxModule } from './vip-box/vip-box.module';



@NgModule({
  declarations: [VipPageComponent],
  imports: [
    CommonModule,
    VipBoxModule
  ],
  exports: [
    VipPageComponent
  ]
})
export class VipPageModule { }
