import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlymonhocComponent } from './qlymonhoc.component';

describe('QlymonhocComponent', () => {
  let component: QlymonhocComponent;
  let fixture: ComponentFixture<QlymonhocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlymonhocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QlymonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
