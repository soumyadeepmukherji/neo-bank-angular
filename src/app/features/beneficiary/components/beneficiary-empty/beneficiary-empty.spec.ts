import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeneficiaryEmpty } from './beneficiary-empty';

describe('BeneficiaryEmpty', () => {
  let component: BeneficiaryEmpty;
  let fixture: ComponentFixture<BeneficiaryEmpty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiaryEmpty],
    }).compileComponents();

    fixture = TestBed.createComponent(BeneficiaryEmpty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
