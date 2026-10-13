import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-beneficiary-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './beneficiary-forms.html',
  styleUrl: './beneficiary-forms.css',
})
export class BeneficiaryFormComponent {
  private fb = inject(FormBuilder);

  // Parent component events
  cancel = output<void>();
  beneficiarySubmit = output<{
    name: string;
    accountNumber: string;
    bankName: string;
    ifsc: string;
  }>();

  submitted = false;
  isSubmitting = false;
  errorMessage = '';

  beneficiaryForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],

      accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{9,18}$/)]],

      confirmAccountNumber: ['', [Validators.required]],

      bankName: ['', [Validators.required, Validators.maxLength(80)]],

      ifsc: ['', [Validators.required, Validators.pattern(/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/)]],
    },
    {
      validators: this.accountNumbersMatch,
    },
  );

  // Validate that both account numbers match
  accountNumbersMatch(control: AbstractControl): ValidationErrors | null {
    const accountNumber = control.get('accountNumber')?.value;
    const confirmAccountNumber = control.get('confirmAccountNumber')?.value;

    if (!accountNumber || !confirmAccountNumber) {
      return null;
    }

    return accountNumber === confirmAccountNumber ? null : { accountNumbersMismatch: true };
  }

  // Easy access to form controls in the HTML
  get f() {
    return this.beneficiaryForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (this.isSubmitting) {
      return;
    }

    if (this.beneficiaryForm.invalid) {
      this.beneficiaryForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const formValue = this.beneficiaryForm.getRawValue();

    this.beneficiarySubmit.emit({
      name: formValue.name!.trim(),
      accountNumber: formValue.accountNumber!,
      bankName: formValue.bankName!.trim(),
      ifsc: formValue.ifsc!.trim().toUpperCase(),
    });
  }

  // Called by the parent when saving finishes
  setSubmitting(value: boolean): void {
    this.isSubmitting = value;
  }

  onCancel(): void {
    if (!this.isSubmitting) {
      this.cancel.emit();
    }
  }
}
