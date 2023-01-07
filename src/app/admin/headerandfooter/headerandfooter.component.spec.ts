import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderandfooterComponent } from './headerandfooter.component';

describe('HeaderandfooterComponent', () => {
  let component: HeaderandfooterComponent;
  let fixture: ComponentFixture<HeaderandfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderandfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderandfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
