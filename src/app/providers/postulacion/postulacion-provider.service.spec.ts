import { TestBed } from '@angular/core/testing';

import { PostulacionProviderService } from './postulacion-provider.service';

describe('PostulacionProviderService', () => {
  let service: PostulacionProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulacionProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
