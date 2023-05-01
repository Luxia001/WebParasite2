import { TestBed } from '@angular/core/testing';

import { ParasiteApiService } from './parasite-api.service';

describe('ParasiteApiService', () => {
  let service: ParasiteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParasiteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
