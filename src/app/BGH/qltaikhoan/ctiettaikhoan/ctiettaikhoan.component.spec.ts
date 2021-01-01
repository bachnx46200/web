import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtiettaikhoanComponent } from './ctiettaikhoan.component';

describe('CtiettaikhoanComponent', () => {
  let component: CtiettaikhoanComponent;
  let fixture: ComponentFixture<CtiettaikhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtiettaikhoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtiettaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
