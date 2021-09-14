import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roadmap-box',
  templateUrl: './roadmap-box.component.html',
  styleUrls: ['./roadmap-box.component.scss']
})
export class RoadmapBoxComponent implements OnInit {

  @Input() index;
  @Input() text;
  constructor() { }

  ngOnInit(): void {
  }

romanize(num): string {
    if (isNaN(num)) {
      return '';
    }
    // tslint:disable-next-line:one-variable-per-declaration
    let digits = String(+num).split(''),
        key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
               '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
               '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        roman = '',
        i = 3;
    while (i--) {
        roman = (key[+digits.pop() + (i * 10)] || '') + roman;
    }
    return Array(+digits.join('') + 1).join('M') + roman;
}

}
