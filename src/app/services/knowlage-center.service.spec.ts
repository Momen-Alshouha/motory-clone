import { TestBed } from '@angular/core/testing';

import { KnowlageCenterService } from './knowlage-center.service';

describe('KnowlageCenterService', () => {
  let service: KnowlageCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowlageCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
