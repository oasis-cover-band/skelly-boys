import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MintButtonComponent } from './mint-button.component';



@NgModule({
  declarations: [MintButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MintButtonComponent
  ]
})
export class MintButtonModule { }
