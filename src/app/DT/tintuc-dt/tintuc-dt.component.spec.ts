import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TintucDTComponent } from './tintuc-dt.component';

describe('TintucDTComponent', () => {
  let component: TintucDTComponent;
  let fixture: ComponentFixture<TintucDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TintucDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TintucDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
