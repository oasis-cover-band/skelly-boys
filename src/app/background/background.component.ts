import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, AfterViewInit {

  zTransform = 2000;
  @ViewChild('videoEle') videoEle: ElementRef;
  @ViewChild('backgroundEle') private backgroundEle: ElementRef;
  @HostListener('window:mousewheel', ['$event'])
  onMouseWheel(event: MouseWheelEvent): void {
    this.scrollElement(event.deltaY);
  }
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }
  scrollElement(deltaY): void {
    const element = this.backgroundEle.nativeElement;
    const elementWidth = element.scrollWidth;
    this.zTransform += (deltaY / 2);
    if (this.zTransform > 2500) {
      this.zTransform = 250;
    } else if (this.zTransform <= 0) {
      this.zTransform = 2500;
    }
    this.renderer.setStyle(
      element,
      'transform',
      `translateZ(${this.zTransform}px)`
      );
  }

  ngAfterViewInit(): void {
    this.videoEle.nativeElement.play();
  }

}
