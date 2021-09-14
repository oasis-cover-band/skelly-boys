import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AboutPageModule } from './about-page/about-page.module';
import { VipPageModule } from './vip-page/vip-page.module';
import { FaqPageModule } from './faq-page/faq-page.module';
import { FooterPageModule } from './footer-page/footer-page.module';
import { RoadmapPageModule } from './roadmap-page/roadmap-page.module';
import { BackgroundModule } from './background/background.module';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    AboutPageModule,
    VipPageModule,
    RoadmapPageModule,
    FaqPageModule,
    FooterPageModule,
    BackgroundModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
