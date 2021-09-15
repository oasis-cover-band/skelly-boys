import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  faqItems = this.projectService.faqs;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

}
