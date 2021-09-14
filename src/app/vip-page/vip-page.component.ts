import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-page',
  templateUrl: './vip-page.component.html',
  styleUrls: ['./vip-page.component.scss']
})
export class VipPageComponent implements OnInit {

  vips = [
    '../../assets/vips/Golden_Skully_Boys_Emerald.jpg',
    '../../assets/vips/Golden_Skully_Boys_Emerald_2.jpg',
    '../../assets/vips/Golden_Skully_Boys_Emerald_3.jpg',
    '../../assets/vips/Golden_Skully_Boys_Emerald_4.jpg',
    '../../assets/vips/Golden_Skully_Boys_Emerald_5.jpg',
    // '../../assets/vips/Golden_Skully_Boys_Emerald_6.jpg',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
