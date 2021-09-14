import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mint-button',
  templateUrl: './mint-button.component.html',
  styleUrls: ['./mint-button.component.scss']
})
export class MintButtonComponent implements OnInit {

  mintCost = this.projectService.mintCost;
  mintCurrency = this.projectService.mintCurrency;
  mintAmount = 1;
  mintMessage = new BehaviorSubject('');
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  incrementUp(): void{
    if (this.mintAmount >= 20) {
      this.mintMessage.next('You may only mint 20 Skully Boys.');
      setTimeout(() => {
        this.mintMessage.next('');
      }, 2500);
      return;
    }
    this.mintAmount++;
  }

  incrementDown(): void{
    if (this.mintAmount <= 1) {
      this.mintMessage.next('You may not mint less than 0 Skully Boys.');
      setTimeout(() => {
        this.mintMessage.next('');
      }, 2500);
      return;
    }
    this.mintAmount--;
  }
}
