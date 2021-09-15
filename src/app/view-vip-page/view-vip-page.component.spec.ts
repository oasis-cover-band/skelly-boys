import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVipPageComponent } from './view-vip-page.component';

describe('ViewVipPageComponent', () => {
  let component: ViewVipPageComponent;
  let fixture: ComponentFixture<ViewVipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVipPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
