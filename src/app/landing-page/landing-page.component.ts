import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {

  keywords = [
    `Immortality`,
    `Eternity`,
    `Luxury`,
    `Pleasure`,
    `The impossible`,
    `Madness`,
    `The wealth`
  ];
  
  keyword = this.keywords[0];
  keywordIndex = 0;
  classes = new BehaviorSubject('');
  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.classes.next('hide');
      setTimeout(() => {
        if (this.keywordIndex === (this.keywords.length - 1)) {
          this.keywordIndex = 0;
        } else {
          this.keywordIndex++;
        }
        this.keyword = this.keywords[this.keywordIndex];
        this.classes.next('');
      }, 500);
    }, 3000);
  }

}
