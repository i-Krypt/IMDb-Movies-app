import { TestBed } from '@angular/core/testing';

import { Top250MoviesService } from './top250-movies.service';

describe('Top250MoviesService', () => {
  let service: Top250MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Top250MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
