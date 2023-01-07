import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecauseComponent } from './createcause.component';

describe('CreatecauseComponent', () => {
  let component: CreatecauseComponent;
  let fixture: ComponentFixture<CreatecauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
