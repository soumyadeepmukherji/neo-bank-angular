import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReusableButton } from './reusable-button';

describe('ReusableButton', () => {
  let component: ReusableButton;
  let fixture: ComponentFixture<ReusableButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ReusableButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
