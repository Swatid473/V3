import { TestBed } from '@angular/core/testing';

import { CustomerlistserveService } from './customerlistserve.service';

describe('CustomerlistserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerlistserveService = TestBed.get(CustomerlistserveService);
    expect(service).toBeTruthy();
  });
});
