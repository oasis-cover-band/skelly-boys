import { Component, AfterViewInit, AfterContentChecked, AfterContentInit, ElementRef } from '@angular/core';
import { fadeUpAnimations, fadeDownAnimations, fadeAnimations, routerAnimations } from './animations';
import { ProjectService } from './project.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeUpAnimations, fadeDownAnimations, fadeAnimations, routerAnimations]
})
export class AppComponent implements AfterContentInit {
  title = 'skully-boys';
  afterViewInit = false;
  videoEle: BehaviorSubject<ElementRef> = this.projectService.videoEle;
  constructor(
    private projectService: ProjectService) {

    }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.afterViewInit = true;
    }, 3000);
  }

  playVideo(): void {
    this.videoEle.getValue().nativeElement.play();
  }
}
