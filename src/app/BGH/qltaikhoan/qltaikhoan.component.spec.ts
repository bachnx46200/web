import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QltaikhoanComponent } from './qltaikhoan.component';

describe('QltaikhoanComponent', () => {
  let component: QltaikhoanComponent;
  let fixture: ComponentFixture<QltaikhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QltaikhoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QltaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
