import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsAndScheduleComponent } from './awards-and-schedule.component';

describe('AwardsAndScheduleComponent', () => {
  let component: AwardsAndScheduleComponent;
  let fixture: ComponentFixture<AwardsAndScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardsAndScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsAndScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
