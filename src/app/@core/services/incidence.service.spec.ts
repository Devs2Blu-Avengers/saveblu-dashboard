import { TestBed } from '@angular/core/testing';

import { IncidenceService } from './incidence.service';

describe('IncidenceServiceService', () => {
  let service: IncidenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
