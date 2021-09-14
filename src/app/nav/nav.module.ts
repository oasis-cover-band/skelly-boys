import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { SocialsModule } from '../socials/socials.module';
import { CornerLogoModule } from '../corner-logo/corner-logo.module';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    SocialsModule,
    CornerLogoModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
