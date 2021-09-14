import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqPageComponent } from './faq-page.component';
import { FaqItemModule } from './faq-item/faq-item.module';



@NgModule({
  declarations: [FaqPageComponent],
  imports: [
    CommonModule,
    FaqItemModule
  ],
  exports: [
    FaqPageComponent
  ]
})
export class FaqPageModule { }
