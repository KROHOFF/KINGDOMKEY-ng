import { TestBed } from '@angular/core/testing';

import { ApiurlService } from './apiurl.service';

describe('ApiurlService', () => {
  let service: ApiurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
