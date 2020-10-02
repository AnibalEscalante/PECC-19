import { TestBed } from '@angular/core/testing';

import { InfoclinicaService } from './infoclinica.service';

describe('InfoclinicaService', () => {
  let service: InfoclinicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoclinicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
