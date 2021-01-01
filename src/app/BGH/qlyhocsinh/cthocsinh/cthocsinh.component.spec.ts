import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CthocsinhComponent } from './cthocsinh.component';

describe('CthocsinhComponent', () => {
  let component: CthocsinhComponent;
  let fixture: ComponentFixture<CthocsinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CthocsinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CthocsinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
