import { TestBed } from '@angular/core/testing';

import { GradingServiceService } from './grading-service.service';

describe('GradingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GradingServiceService = TestBed.get(GradingServiceService);
    expect(service).toBeTruthy();
  });
});
