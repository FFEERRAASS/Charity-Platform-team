import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeTestimonialComponent } from './mange-testimonial.component';

describe('MangeTestimonialComponent', () => {
  let component: MangeTestimonialComponent;
  let fixture: ComponentFixture<MangeTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeTestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
