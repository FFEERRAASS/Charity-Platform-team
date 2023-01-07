import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWalletComponent } from './manage-wallet.component';

describe('ManageWalletComponent', () => {
  let component: ManageWalletComponent;
  let fixture: ComponentFixture<ManageWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
