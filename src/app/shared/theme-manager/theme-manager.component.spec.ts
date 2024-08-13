import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeManagerComponent } from './theme-manager.component';

describe('ThemeManagerComponent', () => {
  let component: ThemeManagerComponent;
  let fixture: ComponentFixture<ThemeManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeManagerComponent]
    });
    fixture = TestBed.createComponent(ThemeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
