import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DstaikhoanhsComponent } from './dstaikhoanhs.component';

describe('DstaikhoanhsComponent', () => {
  let component: DstaikhoanhsComponent;
  let fixture: ComponentFixture<DstaikhoanhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DstaikhoanhsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DstaikhoanhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
