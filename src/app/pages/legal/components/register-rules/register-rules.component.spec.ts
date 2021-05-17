import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRulesComponent } from './register-rules.component';

describe('RegisterRulesComponent', () => {
  let component: RegisterRulesComponent;
  let fixture: ComponentFixture<RegisterRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
