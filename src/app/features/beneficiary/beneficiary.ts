import { Component, inject, ViewChild } from '@angular/core';
import { BeneficiaryListComponent } from './components/beneficiary-list/beneficiary-list';
import { BeneficiaryFormComponent } from './components/beneficiary-forms/beneficiary-forms';
import { BeneficiaryService } from '../../core/services/beneficiary.services';

@Component({
  selector: 'app-beneficiary',
  standalone: true,
  imports: [
    BeneficiaryListComponent,
    BeneficiaryFormComponent
  ],
  templateUrl: './beneficiary.html',
  styleUrl: './beneficiary.css'
})
export class BeneficiaryComponent {
  showAddBeneficiary = false;

  openAddBeneficiary(): void {
    this.showAddBeneficiary = true;
  }

  closeAddBeneficiary(): void {
    this.showAddBeneficiary = false;
  }

 private beneficiaryService = inject(BeneficiaryService);

@ViewChild(BeneficiaryFormComponent)
beneficiaryFormComponent?: BeneficiaryFormComponent;

onBeneficiarySubmit(data: {
  name: string;
  accountNumber: string;
  bankName: string;
  ifsc: string;
}): void {
  this.beneficiaryService.addBeneficiary(data).subscribe({
    next: () => {
      this.beneficiaryFormComponent?.setSubmitting(false);
      this.closeAddBeneficiary();
    },
    error: () => {
      this.beneficiaryFormComponent?.setSubmitting(false);
    }
  });
}
}