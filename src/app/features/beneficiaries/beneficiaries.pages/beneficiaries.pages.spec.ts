import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeneficiariesPages } from './beneficiaries.pages';

describe('BeneficiariesPages', () => {
  let component: BeneficiariesPages;
  let fixture: ComponentFixture<BeneficiariesPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiariesPages],
    }).compileComponents();

    fixture = TestBed.createComponent(BeneficiariesPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
