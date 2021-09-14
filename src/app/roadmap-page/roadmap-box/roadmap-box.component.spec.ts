import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapBoxComponent } from './roadmap-box.component';

describe('RoadmapBoxComponent', () => {
  let component: RoadmapBoxComponent;
  let fixture: ComponentFixture<RoadmapBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
