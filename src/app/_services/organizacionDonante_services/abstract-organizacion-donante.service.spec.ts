import { TestBed } from '@angular/core/testing';

import { AbstractOrganizacionDonanteService } from './abstract-organizacion-donante.service';

describe('AbstractOrganizacionDonanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractOrganizacionDonanteService = TestBed.get(AbstractOrganizacionDonanteService);
    expect(service).toBeTruthy();
  });
});
