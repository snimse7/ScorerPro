import { TestBed } from '@angular/core/testing';

import { ScorerServiceService } from './scorer-service.service';

describe('ScorerServiceService', () => {
  let service: ScorerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScorerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
