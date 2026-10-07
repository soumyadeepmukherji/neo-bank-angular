import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoansPages } from './loans.pages';

describe('LoansPages', () => {
  let component: LoansPages;
  let fixture: ComponentFixture<LoansPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoansPages],
    }).compileComponents();

    fixture = TestBed.createComponent(LoansPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
