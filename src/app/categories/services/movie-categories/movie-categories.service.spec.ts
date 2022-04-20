import { TestBed } from '@angular/core/testing';

import { MovieCategoriesService } from './movie-categories.service';

describe('MovieCategoriesService', () => {
  let service: MovieCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
