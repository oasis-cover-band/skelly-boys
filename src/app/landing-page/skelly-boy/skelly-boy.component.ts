import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skelly-boy',
  templateUrl: './skelly-boy.component.html',
  styleUrls: ['./skelly-boy.component.scss']
})
export class SkellyBoyComponent implements OnInit {

  @ViewChild('imgEle') imgEle: ElementRef;
  classes = '';
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  show(): void {
    setTimeout(() => {
      this.classes = 'show';
    }, 1000);
  }

}
