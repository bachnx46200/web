import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlynamhocComponent } from './qlynamhoc.component';

describe('QlynamhocComponent', () => {
  let component: QlynamhocComponent;
  let fixture: ComponentFixture<QlynamhocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlynamhocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QlynamhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
