import { TestBed } from '@angular/core/testing';

import { LaboratoryServiceService } from './laboratory-service.service';

describe('LaboratoryServiceService', () => {
  let service: LaboratoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
