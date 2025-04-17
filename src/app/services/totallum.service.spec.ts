import { TestBed } from '@angular/core/testing';

import { TotallumService } from './totallum.service';

describe('TotallumService', () => {
  let service: TotallumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotallumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
