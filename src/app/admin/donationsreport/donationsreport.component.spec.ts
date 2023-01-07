import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsreportComponent } from './donationsreport.component';

describe('DonationsreportComponent', () => {
  let component: DonationsreportComponent;
  let fixture: ComponentFixture<DonationsreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
