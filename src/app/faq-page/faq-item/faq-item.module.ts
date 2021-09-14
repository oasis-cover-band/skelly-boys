import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqItemComponent } from './faq-item.component';



@NgModule({
  declarations: [FaqItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FaqItemComponent
  ]
})
export class FaqItemModule { }
