import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkellyNecklaceComponent } from './skelly-necklace.component';

describe('SkellyNecklaceComponent', () => {
  let component: SkellyNecklaceComponent;
  let fixture: ComponentFixture<SkellyNecklaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkellyNecklaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkellyNecklaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
