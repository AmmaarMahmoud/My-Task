import { TestBed } from '@angular/core/testing';

import { ApiDealsService } from './api-deals.service';

describe('ApiDealsService', () => {
  let service: ApiDealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
