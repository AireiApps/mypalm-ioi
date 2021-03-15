import { TestBed } from '@angular/core/testing';

import { EstatemanagerServiceService } from './estatemanager-service.service';

describe('EstatemanagerServiceService', () => {
  let service: EstatemanagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstatemanagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
