import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterPageComponent } from './footer-page.component';
import { SocialsModule } from '../socials/socials.module';
import { StampLogoModule } from '../stamp-logo/stamp-logo.module';
import { CopyrightModule } from './copyright/copyright.module';



@NgModule({
  declarations: [FooterPageComponent],
  imports: [
    CommonModule,
    SocialsModule,
    StampLogoModule,
    CopyrightModule
  ],
  exports: [
    FooterPageComponent
  ]
})
export class FooterPageModule { }
