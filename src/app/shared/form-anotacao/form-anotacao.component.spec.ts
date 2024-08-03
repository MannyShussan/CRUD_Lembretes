import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnotacaoComponent } from './form-anotacao.component';

describe('FormAnotacaoComponent', () => {
  let component: FormAnotacaoComponent;
  let fixture: ComponentFixture<FormAnotacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAnotacaoComponent]
    });
    fixture = TestBed.createComponent(FormAnotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
