import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-vip-page',
  templateUrl: './view-vip-page.component.html',
  styleUrls: ['./view-vip-page.component.scss']
})
export class ViewVipPageComponent implements OnInit {

  vips = this.projectService.vips;
  index;
  constructor(
    private projectService: ProjectService,
    private snapshot: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.snapshot.params.subscribe(result => {
      this.index = result.id;
    });
  }

  close(): void {
    this.router.navigateByUrl('', {skipLocationChange: true});
  }

}
