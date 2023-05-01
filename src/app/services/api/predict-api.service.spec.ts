import { TestBed } from '@angular/core/testing';

import { PredictApiService } from './predict-api.service';

describe('PredictApiService', () => {
  let service: PredictApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
