import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkellyBoyComponent } from './skelly-boy.component';

describe('SkellyBoyComponent', () => {
  let component: SkellyBoyComponent;
  let fixture: ComponentFixture<SkellyBoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkellyBoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkellyBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
