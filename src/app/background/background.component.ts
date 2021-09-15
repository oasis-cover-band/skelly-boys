import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, AfterViewInit {

  zTransform = -78;
  @ViewChild('videoEle') videoEle: ElementRef;
  @ViewChild('backgroundEle') private backgroundEle: ElementRef;
  @ViewChild('pinkBackgroundEle') private pinkBackgroundEle: ElementRef;
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
    if (this.zTransform > 70) {
      this.zTransform = -78;
    } else if (this.zTransform <= -79) {
      this.zTransform = 69;
    }
    this.renderer.setStyle(
      element,
      'transform',
      `translateZ(${this.zTransform}vw)`
      );
  }

  ngAfterViewInit(): void {
  }

  show(): void {
    this.videoEle.nativeElement.pause();
    setTimeout(() => {
      this.renderer.addClass(
        this.pinkBackgroundEle.nativeElement,
        'pink'
        );
      this.renderer.addClass(
        this.backgroundEle.nativeElement,
        'show'
        );
      setTimeout(() => {
        this.videoEle.nativeElement.play();
      }, 1000);
    }, 1000);
  }

}
