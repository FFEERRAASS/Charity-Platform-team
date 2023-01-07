import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCharityComponent } from './all-charity.component';

describe('AllCharityComponent', () => {
  let component: AllCharityComponent;
  let fixture: ComponentFixture<AllCharityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCharityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
