import { TestBed } from '@angular/core/testing';

import { MockVoluntarioService } from './mock-voluntario.service';

describe('MockVoluntarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockVoluntarioService = TestBed.get(MockVoluntarioService);
    expect(service).toBeTruthy();
  });
});
