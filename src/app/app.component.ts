import { Component, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { fadeUpAnimations, fadeDownAnimations, fadeAnimations, routerAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeUpAnimations, fadeDownAnimations, fadeAnimations, routerAnimations]
})
export class AppComponent implements AfterContentInit {
  title = 'skully-boys';
  afterViewInit = false;

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.afterViewInit = true;
    }, 3000);
  }
}
