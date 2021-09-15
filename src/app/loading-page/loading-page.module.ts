import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './loading-page.component';
import { StampLogoModule } from '../stamp-logo/stamp-logo.module';



@NgModule({
  declarations: [LoadingPageComponent],
  imports: [
    CommonModule,
    StampLogoModule
  ],
  exports: [
    LoadingPageComponent
  ]
})
export class LoadingPageModule { }
