import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skelly-necklace',
  templateUrl: './skelly-necklace.component.html',
  styleUrls: ['./skelly-necklace.component.scss']
})
export class SkellyNecklaceComponent implements OnInit {

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
