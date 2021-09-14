import { Component, OnInit, ElementRef, ViewChild, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-roadmap-page',
  templateUrl: './roadmap-page.component.html',
  styleUrls: ['./roadmap-page.component.scss']
})
export class RoadmapPageComponent implements OnInit {

  roadmapBoxes = [
    `The Launch: Skully Boys will make their appearance at the launch of the website`,
    `Awakening of the Skullys: 5555 Skullys will be revealed ready to be minted on the Solana blockchain.`,
    `VIP Club Incoming: Creation of the “VIP Skully Boys Bones Club”.`,
    `The Audit: Listing on a Tools to check the items value.`,
    `Skully’Goodies: Launch of the Skully’Goodies available for the Skully Community.`,
    `Skully Art Gallery: The Skully Boys will appear in an Art Gallery.`,
    `Charity Skull: Creation of a Charity and The VIP Skully Bones Boys Club will decide where the donation will goes.`,
    `The Curse hit another club, stay tuned to find out more.`,
    `Mystery Guest Collab for the promotion of Skully Community, it’s going to be huge!`,
    `New Project: New Skully XXXXX Project Announced, Gaming project loading..`,
    `New Skully XXXXX Drop! New Features rise from the grave..`,
    `Second Exhibition : Be ready for the mint, not for the small player, well-informed audience.`,
    `Mysterious Collection revealed, where the curse casts its spell ?`,
    `This is just the beginning of the Skully Epic, do not blink or you will miss something!`,
  ];
  currentPosition = 0;
  hoveringOver = false;
  selectedIndex = 0;
  @ViewChild('roadmapScroller') private roadmapScroller: ElementRef;
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  scrollToElement(index): void {
    this.selectedIndex = index;
    const element = this.roadmapScroller.nativeElement;
    if (index !== 0) {
      this.renderer.setStyle(
        element,
        'transform',
        `translateX(${150 - (index * 27.5)}vw)`
        );
      } else {
        this.renderer.setStyle(
          element,
          'transform',
          `translateX(${150}vw)`
          );
        }
  }

  toggleOver(): void {
    this.hoveringOver = !this.hoveringOver;
  }

}
