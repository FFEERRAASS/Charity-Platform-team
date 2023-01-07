import { TestBed } from '@angular/core/testing';

import { BenefactorServiceService } from './benefactor-service.service';

describe('BenefactorServiceService', () => {
  let service: BenefactorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenefactorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
