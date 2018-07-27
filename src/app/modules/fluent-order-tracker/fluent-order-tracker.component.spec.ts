import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentOrderTrackerComponent } from './fluent-order-tracker.component';

describe('FluentOrderTrackerComponent', () => {
  let component: FluentOrderTrackerComponent;
  let fixture: ComponentFixture<FluentOrderTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluentOrderTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentOrderTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
