import { TestBed } from '@angular/core/testing';

import { DatousuarioService } from './datousuario.service';

describe('DatousuarioService', () => {
  let service: DatousuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatousuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
