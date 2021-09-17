import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';
import enableInlineVideo from 'iphone-inline-video';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, AfterViewInit {

  videoPlaying = false;
  transforms;
  zTransform = 0;
  yTransform = 0;
  xTransform = 0;
  lastMovement = new Date().getTime();
  @ViewChild('videoEle') videoEle: ElementRef;
  @ViewChild('backgroundEle') private backgroundEle: ElementRef;
  // @ViewChild('pinkBackgroundEle') private pinkBackgroundEle: ElementRef;
  @HostListener('window:mousewheel', ['$event'])
  onMouseWheel(event: MouseWheelEvent): void {
    this.scrollElement(event.deltaY, event.deltaX);
  }
  constructor(
    private renderer: Renderer2,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
//     webView.configuration.allowsInlineMediaPlayback = true
// if #available(iOS 10.0, *) {
//     webConfiguration.mediaTypesRequiringUserActionForPlayback = []
// } else {
//     // Fallback on earlier versions
//     webConfiguration.mediaPlaybackRequiresUserAction = false
// }
  const video = document.querySelector('video');
  enableInlineVideo(video);
  }
  scrollElement(deltaY, deltaX): void {
    if (this.lastMovement - new Date().getTime() > -500) {
      return;
    }
    this.lastMovement = new Date().getTime();
    const element = this.backgroundEle.nativeElement;
    this.zTransform += (deltaY / 2);
    if (this.zTransform > 30) {
      this.zTransform = 0;
    } else if (this.zTransform <= -19) {
      this.zTransform = 10;
    }
    this.renderer.setStyle(
      element,
      'transform',
      `translateZ(${this.zTransform}vw) translate3d(0,0,${this.zTransform}vw)`
      );
    // this.xTransform += (deltaY / 2);
    // if (this.xTransform < 1) {
    //   this.xTransform = 50;
    // }
    // this.yTransform +=  (Math.random() - 0.25) * deltaY;
    // if (this.yTransform < -50) {
    //   this.yTransform = 50;
    // }
    // this.renderer.setStyle(
    //   element,
    //   'backgroundPosition',
    //   `(${this.xTransform}%) ${this.yTransform}%)`
    //   );
    // this.transforms = this.xTransform + '% ' + this.yTransform + '%';
  }

  ngAfterViewInit(): void {
    this.projectService.videoEle.next(this.videoEle);
    this.videoEle.nativeElement.volume = 0;
    this.videoEle.nativeElement.defaultMuted = true;
    this.videoEle.nativeElement.muted = true;
    setTimeout(() => {
      if (this.videoPlaying === false) {
        this.videoEle.nativeElement.play();
        this.renderer.setProperty(this.videoEle.nativeElement, 'play', true);
        this.show();
      }
    }, 4000);
  }

  show(): void {
    setTimeout(() => {
      this.renderer.addClass(
        this.backgroundEle.nativeElement,
        'show'
        );
    }, 1000);
  }

  play(): void {
    this.videoPlaying = true;
  }

}
