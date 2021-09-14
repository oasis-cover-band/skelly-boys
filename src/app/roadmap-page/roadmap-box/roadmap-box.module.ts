import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapBoxComponent } from './roadmap-box.component';



@NgModule({
  declarations: [RoadmapBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RoadmapBoxComponent
  ]
})
export class RoadmapBoxModule { }
