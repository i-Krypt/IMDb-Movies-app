import { TestBed } from '@angular/core/testing';

import { Top250TvsService } from './top250-tvs.service';

describe('Top250TvsService', () => {
  let service: Top250TvsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Top250TvsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
