
import { Component, OnInit, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiaryService } from '../../../../core/services/beneficiary.services';
import { Beneficiary } from '../../../../core/models/benificiary/benificiary-module';
import { BeneficiaryEmptyComponent } from '../beneficiary-empty/beneficiary-empty';

@Component({
  selector: 'app-beneficiary-list',
  standalone: true,
  imports: [CommonModule, BeneficiaryEmptyComponent],
  templateUrl: './beneficiary-list.html',
  styleUrl: './beneficiary-list.css'
})
export class BeneficiaryListComponent implements OnInit {
  private beneficiaryService = inject(BeneficiaryService);

  beneficiaries: Beneficiary[] = [];
  loading = true;
  errorMessage = '';

  addBeneficiary = output<void>();

  ngOnInit(): void {
    this.loadBeneficiaries();
  }

  loadBeneficiaries(): void {
    this.loading = true;
    this.errorMessage = '';

    this.beneficiaryService.getBeneficiaries().subscribe({
      next: (data) => {
        this.beneficiaries = data;
        this.loading = false;
      },
      error: () => {
        this.beneficiaries = [];
        this.errorMessage = 'Unable to load beneficiaries. Please try again.';
        this.loading = false;
      }
    });
  }

  maskAccountNumber(accountNumber: string): string {
    if (!accountNumber) return 'Not available';

    const visibleDigits = accountNumber.slice(-4);
    return `XXXX XXXX ${visibleDigits}`;
  }

  getStatusClass(status: Beneficiary['status']): string {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Failed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  }

  onAddBeneficiary(): void {
    this.addBeneficiary.emit();
  }
}

