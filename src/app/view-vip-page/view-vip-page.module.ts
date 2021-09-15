import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewVipPageComponent } from './view-vip-page.component';
import { VipBoxModule } from '../vip-page/vip-box/vip-box.module';



@NgModule({
  declarations: [ViewVipPageComponent],
  imports: [
    CommonModule,
    VipBoxModule
  ],
  exports: [
    ViewVipPageComponent
  ]
})
export class ViewVipPageModule { }
