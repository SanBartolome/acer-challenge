import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNavbarComponent } from './legal-navbar.component';

describe('LegalNavbarComponent', () => {
  let component: LegalNavbarComponent;
  let fixture: ComponentFixture<LegalNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
