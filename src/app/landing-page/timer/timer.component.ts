import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { ProjectService } from 'src/app/project.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  startTime =  this.projectService.startTime;
  @Input() currentTime;

  constructor(private projectService: ProjectService) {

  }

  ngOnInit(): void {
  }

}
