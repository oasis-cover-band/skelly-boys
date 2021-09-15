import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-vip-page',
  templateUrl: './vip-page.component.html',
  styleUrls: ['./vip-page.component.scss']
})
export class VipPageComponent implements OnInit {

  vips = this.projectService.vips;
  constructor(
  private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

}
