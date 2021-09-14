import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent implements OnInit {
  @Input() question;
  @Input() answer;
  constructor() { }

  ngOnInit(): void {
  }

}
