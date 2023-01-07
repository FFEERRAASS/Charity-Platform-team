import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCausesComponent } from './manage-causes.component';

describe('ManageCausesComponent', () => {
  let component: ManageCausesComponent;
  let fixture: ComponentFixture<ManageCausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCausesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
