import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionOfFundsComponent } from './distribution-of-funds.component';

describe('DistributionOfFundsComponent', () => {
  let component: DistributionOfFundsComponent;
  let fixture: ComponentFixture<DistributionOfFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributionOfFundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionOfFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
