import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeneficiaryForms } from './beneficiary-forms';

describe('BeneficiaryForms', () => {
  let component: BeneficiaryForms;
  let fixture: ComponentFixture<BeneficiaryForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiaryForms],
    }).compileComponents();

    fixture = TestBed.createComponent(BeneficiaryForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
