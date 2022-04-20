import { TestBed } from '@angular/core/testing';

import { InTheatersService } from './in-theaters.service';

describe('InTheatersService', () => {
  let service: InTheatersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InTheatersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
