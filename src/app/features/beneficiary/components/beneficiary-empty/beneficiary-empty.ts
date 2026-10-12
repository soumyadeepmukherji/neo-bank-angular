
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-beneficiary-empty',
  standalone: true,
  templateUrl: './beneficiary-empty.html',
  styleUrl: './beneficiary-empty.css'
})
export class BeneficiaryEmptyComponent {
  addBeneficiary = output<void>();

  onAddBeneficiary(): void {
    this.addBeneficiary.emit();
  }
}

