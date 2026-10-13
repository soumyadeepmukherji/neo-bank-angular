import { TestBed } from '@angular/core/testing';
import { BeneficiaryServices } from './beneficiary.services';

describe('BeneficiaryServices', () => {
  let service: BeneficiaryServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeneficiaryServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
