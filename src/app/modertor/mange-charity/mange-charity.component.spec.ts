import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeCharityComponent } from './mange-charity.component';

describe('MangeCharityComponent', () => {
  let component: MangeCharityComponent;
  let fixture: ComponentFixture<MangeCharityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeCharityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
