import { TestBed } from '@angular/core/testing';

import { PopularTvsService } from './popular-tvs.service';

describe('PopularTvsService', () => {
  let service: PopularTvsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularTvsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
