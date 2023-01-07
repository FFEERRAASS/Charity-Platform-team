import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDonationsComponent } from './accept-donations.component';

describe('AcceptDonationsComponent', () => {
  let component: AcceptDonationsComponent;
  let fixture: ComponentFixture<AcceptDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
