import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsDayComponent } from './earnings-day.component';

describe('EarningsDayComponent', () => {
  let component: EarningsDayComponent;
  let fixture: ComponentFixture<EarningsDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningsDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningsDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
