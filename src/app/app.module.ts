import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { LoadedDirective } from './load.directive';
import { LoadingPageModule } from './loading-page/loading-page.module';

@NgModule({
  declarations: [
    AppComponent,
    LoadedDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LandingPageModule,
    AboutPageModule,
    VipPageModule,
    RoadmapPageModule,
    FaqPageModule,
    FooterPageModule,
    BackgroundModule,
    NavModule,
    LoadingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
