import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgContactusComponent } from './msg-contactus.component';

describe('MsgContactusComponent', () => {
  let component: MsgContactusComponent;
  let fixture: ComponentFixture<MsgContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgContactusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
