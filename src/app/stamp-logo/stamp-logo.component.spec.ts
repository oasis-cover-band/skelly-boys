import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampLogoComponent } from './stamp-logo.component';

describe('StampLogoComponent', () => {
  let component: StampLogoComponent;
  let fixture: ComponentFixture<StampLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StampLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StampLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
