import { TestBed } from '@angular/core/testing';

import { FormAnotacaoService } from './form-anotacao.service';

describe('FormAnotacaoService', () => {
  let service: FormAnotacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAnotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
