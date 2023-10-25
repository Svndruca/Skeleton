import { TestBed } from '@angular/core/testing';

import { ApiSkeletonService } from './api-skeleton.service';

describe('ApiSkeletonService', () => {
  let service: ApiSkeletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSkeletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
