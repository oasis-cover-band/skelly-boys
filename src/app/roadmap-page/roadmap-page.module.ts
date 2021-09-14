import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapPageComponent } from './roadmap-page.component';
import { RoadmapBoxModule } from './roadmap-box/roadmap-box.module';



@NgModule({
  declarations: [RoadmapPageComponent],
  imports: [
    CommonModule,
    RoadmapBoxModule
  ],
  exports: [
    RoadmapPageComponent
  ]
})
export class RoadmapPageModule { }
