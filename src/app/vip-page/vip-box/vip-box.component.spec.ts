import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipBoxComponent } from './vip-box.component';

describe('VipBoxComponent', () => {
  let component: VipBoxComponent;
  let fixture: ComponentFixture<VipBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
