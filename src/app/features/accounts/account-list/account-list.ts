
import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';

import { AccountService } from '../../../core/services/account';
import { Account } from '../../../core/models/account';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account-list.html'
})
export class AccountListComponent implements OnInit {
  private readonly accountService = inject(AccountService);
  private readonly cdr = inject(ChangeDetectorRef);

  accounts: Account[] = [];
  filteredAccounts: Account[] = [];

  loading = false;
  loadState: 'loading' | 'success' | 'error' = 'loading';
  errorMessage = '';

  searchTerm = '';
  selectedType = 'All';
  selectedAccount: Account | null = null;

  readonly accountTypes = ['All', 'Savings', 'Current', 'FD'];

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.loading = true;
    this.loadState = 'loading';
    this.errorMessage = '';
    this.selectedType = 'All';
    this.searchTerm = '';

    this.accountService.getAccounts()
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (data: Account[]) => {
          this.accounts = Array.isArray(data) ? data : [];
          this.applyFilters();

          this.selectedAccount =
            this.accounts.length > 0 ? this.accounts[0] : null;

          this.loadState = 'success';
          this.cdr.detectChanges();

          console.log('Accounts loaded:', this.accounts);
        },
        error: (error: unknown) => {
          console.error('Failed to load accounts:', error);

          this.accounts = [];
          this.filteredAccounts = [];
          this.selectedAccount = null;
          this.errorMessage =
            'Unable to load accounts. Please try again.';
          this.loadState = 'error';

          this.cdr.detectChanges();
        }
      });
  }

  applyFilters(): void {
    const search = this.searchTerm.trim().toLowerCase();

    this.filteredAccounts = this.accounts.filter(account => {
      const type = String(account.accountType ?? '').toLowerCase();
      const status = String(account.status ?? '').toLowerCase();
      const id = String(account.id ?? '').toLowerCase();
      const digits = String(account.lastFourDigits ?? '').toLowerCase();

      const matchesType =
        this.selectedType === 'All' ||
        type === this.selectedType.toLowerCase();

      const matchesSearch =
        type.includes(search) ||
        status.includes(search) ||
        id.includes(search) ||
        digits.includes(search);

      return matchesType && matchesSearch;
    });
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onTypeChange(type: string): void {
    this.selectedType = type;
    this.applyFilters();
  }

  selectAccount(account: Account): void {
    this.selectedAccount = account;
  }

  get totalBalance(): number {
    return this.accounts.reduce(
      (total, account) => total + Number(account.balance || 0),
      0
    );
  }

  get activeAccountsCount(): number {
    return this.accounts.filter(
      account => account.status?.toLowerCase() === 'active'
    ).length;
  }

  trackByAccountId(index: number, account: Account): string | number {
    return account.id;
  }

  formatBalance(balance: number, currency = 'INR'): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency,
      maximumFractionDigits: 2
    }).format(balance);
  }
}
