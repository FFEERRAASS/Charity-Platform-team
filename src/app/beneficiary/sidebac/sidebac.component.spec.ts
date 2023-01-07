import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebacComponent } from './sidebac.component';

describe('SidebacComponent', () => {
  let component: SidebacComponent;
  let fixture: ComponentFixture<SidebacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
