import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaityallComponent } from './chaityall.component';

describe('ChaityallComponent', () => {
  let component: ChaityallComponent;
  let fixture: ComponentFixture<ChaityallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaityallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaityallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
