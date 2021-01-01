import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoatdongDTComponent } from './hoatdong-dt.component';

describe('HoatdongDTComponent', () => {
  let component: HoatdongDTComponent;
  let fixture: ComponentFixture<HoatdongDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoatdongDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoatdongDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
