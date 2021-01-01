import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoctapDTComponent } from './hoctap-dt.component';

describe('HoctapDTComponent', () => {
  let component: HoctapDTComponent;
  let fixture: ComponentFixture<HoctapDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoctapDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoctapDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
