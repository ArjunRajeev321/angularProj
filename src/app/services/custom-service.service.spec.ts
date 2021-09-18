import { TestBed } from '@angular/core/testing';

import { CustomServiceService } from './custom-service.service';

describe('CustomServiceService', () => {
  let service: CustomServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
