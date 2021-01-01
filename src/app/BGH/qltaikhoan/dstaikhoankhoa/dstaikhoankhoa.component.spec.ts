import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DstaikhoankhoaComponent } from './dstaikhoankhoa.component';

describe('DstaikhoankhoaComponent', () => {
  let component: DstaikhoankhoaComponent;
  let fixture: ComponentFixture<DstaikhoankhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DstaikhoankhoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DstaikhoankhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
