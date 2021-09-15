import { Component, OnInit, ElementRef, ViewChild, HostListener, Renderer2 } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-roadmap-page',
  templateUrl: './roadmap-page.component.html',
  styleUrls: ['./roadmap-page.component.scss']
})
export class RoadmapPageComponent implements OnInit {

  roadmapBoxes = this.projectService.roadmapBoxes;
  currentPosition = 0;
  hoveringOver = false;
  selectedIndex = 0;
  @ViewChild('roadmapScroller') private roadmapScroller: ElementRef;
  constructor(
    private renderer: Renderer2,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  scrollToElement(index): void {
    this.selectedIndex = index;
    const element = this.roadmapScroller.nativeElement;
    if (index !== 0) {
      this.renderer.setStyle(
        element,
        'transform',
        `translateX(${150 - (index * 27.5)}vw)`
        );
      } else {
        this.renderer.setStyle(
          element,
          'transform',
          `translateX(${150}vw)`
          );
        }
  }

  toggleOver(): void {
    this.hoveringOver = !this.hoveringOver;
  }

}
