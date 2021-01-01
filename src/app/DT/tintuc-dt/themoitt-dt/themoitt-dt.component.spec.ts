import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemoittDTComponent } from './themoitt-dt.component';

describe('ThemoittDTComponent', () => {
  let component: ThemoittDTComponent;
  let fixture: ComponentFixture<ThemoittDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemoittDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemoittDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
