import { TestBed } from '@angular/core/testing';

import { FeaturedMakesService } from './featured-makes.service';

describe('FeaturedMakesService', () => {
  let service: FeaturedMakesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedMakesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
