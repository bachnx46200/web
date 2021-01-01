import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuDTComponent } from './trangchu-dt.component';

describe('TrangchuDTComponent', () => {
  let component: TrangchuDTComponent;
  let fixture: ComponentFixture<TrangchuDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangchuDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangchuDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
