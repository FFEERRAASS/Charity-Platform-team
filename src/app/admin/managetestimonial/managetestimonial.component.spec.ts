import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetestimonialComponent } from './managetestimonial.component';

describe('ManagetestimonialComponent', () => {
  let component: ManagetestimonialComponent;
  let fixture: ComponentFixture<ManagetestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagetestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagetestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
