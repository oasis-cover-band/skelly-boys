import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vip-box',
  templateUrl: './vip-box.component.html',
  styleUrls: ['./vip-box.component.scss']
})
export class VipBoxComponent implements OnInit {

  @Input() image = '../../../assets/images/mock_vip.svg';
  @Input() index = 0;
  @HostBinding('class.large') @Input() large = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  open(): void {
    this.router.navigateByUrl('view-vip/' + Number(this.index), {skipLocationChange: true});

  }

}
