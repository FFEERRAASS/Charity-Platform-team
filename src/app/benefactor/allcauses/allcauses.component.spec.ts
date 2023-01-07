import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcausesComponent } from './allcauses.component';

describe('AllcausesComponent', () => {
  let component: AllcausesComponent;
  let fixture: ComponentFixture<AllcausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcausesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
