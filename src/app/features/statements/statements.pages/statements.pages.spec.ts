import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatementsPages } from './statements.pages';

describe('StatementsPages', () => {
  let component: StatementsPages;
  let fixture: ComponentFixture<StatementsPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatementsPages],
    }).compileComponents();

    fixture = TestBed.createComponent(StatementsPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
