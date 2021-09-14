import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerLogoComponent } from './corner-logo.component';

describe('CornerLogoComponent', () => {
  let component: CornerLogoComponent;
  let fixture: ComponentFixture<CornerLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornerLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
