import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { SocialsModule } from '../socials/socials.module';



@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    SocialsModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutPageModule { }
