import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlyhocsinhComponent } from './qlyhocsinh.component';

describe('QlyhocsinhComponent', () => {
  let component: QlyhocsinhComponent;
  let fixture: ComponentFixture<QlyhocsinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlyhocsinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QlyhocsinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
