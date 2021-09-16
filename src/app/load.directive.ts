import { Directive, Output, EventEmitter, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'img[loaded]'
})
export class LoadedDirective {

  @Output() loaded = new EventEmitter();

  @HostListener('load')
  onLoad(): void {
    console.dir('lopaded');
    this.loaded.emit();
  }

  constructor(private elRef: ElementRef<HTMLImageElement>) {
    if (this.elRef.nativeElement.complete) {
      this.loaded.emit();
    }
  }
}
