import { TestBed } from '@angular/core/testing';

import { EnergiesService } from './energies.service';

describe('EnergiesService', () => {
  let service: EnergiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
