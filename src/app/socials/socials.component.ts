import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  @HostBinding('class.invert') @Input() invert = false;
  @HostBinding('class.small') @Input() small = false;
  @HostBinding('class.three-only') @Input() threeOnly = false;
  socialLinks = {
    discord: 'https://discord.gg/N28uSH94MA',
    twitter: 'https://twitter.com/SkullyBoysBC',
    instagram: 'https://www.instagram.com/theskullyboys/',
    medium: 'https://google.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
