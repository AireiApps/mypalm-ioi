import { TestBed } from '@angular/core/testing';

import { GeneralmanagerServiceService } from './generalmanager-service.service';

describe('GeneralmanagerServiceService', () => {
  let service: GeneralmanagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralmanagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
