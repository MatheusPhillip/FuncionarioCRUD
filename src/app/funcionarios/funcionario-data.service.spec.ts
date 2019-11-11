import { TestBed } from '@angular/core/testing';

import { FuncionarioDataService } from './funcionario-data.service';

describe('FuncionarioDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionarioDataService = TestBed.get(FuncionarioDataService);
    expect(service).toBeTruthy();
  });
});
