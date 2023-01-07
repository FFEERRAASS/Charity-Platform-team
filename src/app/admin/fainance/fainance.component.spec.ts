import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FainanceComponent } from './fainance.component';

describe('FainanceComponent', () => {
  let component: FainanceComponent;
  let fixture: ComponentFixture<FainanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FainanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
