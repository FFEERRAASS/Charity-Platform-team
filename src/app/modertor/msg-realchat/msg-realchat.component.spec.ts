import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgRealchatComponent } from './msg-realchat.component';

describe('MsgRealchatComponent', () => {
  let component: MsgRealchatComponent;
  let fixture: ComponentFixture<MsgRealchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgRealchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgRealchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
