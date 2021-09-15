import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @HostListener('window:mousewheel', ['$event'])
  onMouseWheel(event: MouseWheelEvent): void {
    this.checkStyle(event.pageY);
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  checkStyle(screenY): void {
    if (screenY > 1000) {
      this.renderer.addClass(
        this.elementRef.nativeElement,
        'showing'
      );
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement,
        'showing'
      );
    }
  }

}
