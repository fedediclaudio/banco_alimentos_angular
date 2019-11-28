import { TestBed } from '@angular/core/testing';

import { MockOrganizacionDonanteService } from './mock-organizacion-donante.service';

describe('MockOrganizacionDonanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockOrganizacionDonanteService = TestBed.get(MockOrganizacionDonanteService);
    expect(service).toBeTruthy();
  });
});
