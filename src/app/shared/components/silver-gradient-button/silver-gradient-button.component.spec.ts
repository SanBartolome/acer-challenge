import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverGradientButtonComponent } from './silver-gradient-button.component';

describe('SilverGradientButtonComponent', () => {
  let component: SilverGradientButtonComponent;
  let fixture: ComponentFixture<SilverGradientButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilverGradientButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverGradientButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
