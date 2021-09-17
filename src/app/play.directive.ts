import { Directive, Output, EventEmitter, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'video[check]'
})
export class PlayingDirective {

  @Output() check = new EventEmitter();

  @HostListener('check')
  onLoad(): void {
    this.check.emit();
  }

  constructor(private elRef: ElementRef<HTMLVideoElement>) {
    // tslint:disable-next-line:max-line-length
    if (this.elRef.nativeElement.currentTime > 0 &&
      !this.elRef.nativeElement.paused &&
      !this.elRef.nativeElement.ended &&
      this.elRef.nativeElement.readyState > 2) {
        this.check.emit();
    }
  }
}
