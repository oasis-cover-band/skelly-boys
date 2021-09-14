import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-vip-box',
  templateUrl: './vip-box.component.html',
  styleUrls: ['./vip-box.component.scss']
})
export class VipBoxComponent implements OnInit {

  @Input() image = '../../../assets/images/mock_vip.svg';

  @HostBinding('class.opened') opened = false;
  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    this.opened = !this.opened;
  }

}
