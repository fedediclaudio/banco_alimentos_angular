import { TestBed } from '@angular/core/testing';

import { AbstractVoluntarioService } from './abstract-voluntario.service';

describe('AbstractVoluntarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractVoluntarioService = TestBed.get(AbstractVoluntarioService);
    expect(service).toBeTruthy();
  });
});
