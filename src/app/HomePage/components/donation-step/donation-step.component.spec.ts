import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationStepComponent } from './donation-step.component';

describe('DonationStepComponent', () => {
  let component: DonationStepComponent;
  let fixture: ComponentFixture<DonationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
