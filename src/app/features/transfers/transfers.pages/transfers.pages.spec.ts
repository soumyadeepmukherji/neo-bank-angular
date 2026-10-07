import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransfersPages } from './transfers.pages';

describe('TransfersPages', () => {
  let component: TransfersPages;
  let fixture: ComponentFixture<TransfersPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransfersPages],
    }).compileComponents();

    fixture = TestBed.createComponent(TransfersPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
