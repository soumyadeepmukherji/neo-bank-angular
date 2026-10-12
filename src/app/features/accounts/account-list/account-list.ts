
import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

import {
  Account,
  AccountTab,
  AccountType
} from '../../../core/models/account';

import { AccountService } from '../../../core/services/account';

type AccountLoadState = 'loading' | 'success' | 'empty' | 'error';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './account-list.html'
})
export class AccountListComponent implements OnInit {

  private accountService = inject(AccountService);

  // New: account retrieval state
  loadState: AccountLoadState = 'loading';

  accountTypes: AccountType[] = ['Savings', 'Current', 'FD'];

  selectedAccountType: AccountType = 'Savings';
  selectedAccountId: number | null = null;
  activeTab: AccountTab = 'Overview';

  // Accounts now come from the service instead of hardcoded data
  accounts: Account[] = [];

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    // Clear old data before requesting accounts again
    this.accounts = [];
    this.selectedAccountId = null;
    this.activeTab = 'Overview';
    this.loadState = 'loading';

    this.accountService.getAccounts().subscribe({
      next: (data: Account[]) => {
        this.accounts = Array.isArray(data) ? data : [];

        if (this.accounts.length === 0) {
          this.loadState = 'empty';
          return;
        }

        this.loadState = 'success';

        // Preserve the selected account type where possible
        const firstMatchingAccount = this.accounts.find(
          account => account.accountType === this.selectedAccountType
        );

        if (firstMatchingAccount) {
          this.selectedAccountId = firstMatchingAccount.id;
        } else {
          this.selectedAccountType = this.accounts[0].accountType;
          this.selectedAccountId = this.accounts[0].id;
        }
      },

      error: () => {
        // Do not expose account data or backend error details
        this.accounts = [];
        this.selectedAccountId = null;
        this.loadState = 'error';
      }
    });
  }

  get filteredAccounts(): Account[] {
    if (this.loadState !== 'success') {
      return [];
    }

    return this.accounts.filter(
      account => account.accountType === this.selectedAccountType
    );
  }

  get selectedAccount(): Account | undefined {
    if (this.loadState !== 'success') {
      return undefined;
    }

    return this.accounts.find(
      account => account.id === this.selectedAccountId
    );
  }

  get totalBalance(): number {
    return this.filteredAccounts.reduce(
      (total, account) => total + account.balance,
      0
    );
  }

  selectAccountType(type: AccountType): void {
    if (this.loadState !== 'success') {
      return;
    }

    this.selectedAccountType = type;

    const firstAccount = this.filteredAccounts[0];
    this.selectedAccountId = firstAccount?.id ?? null;

    // Keep the user on the Overview tab when changing account type.
    this.activeTab = 'Overview';
  }

  selectAccount(account: Account): void {
    if (this.loadState !== 'success') {
      return;
    }

    this.selectedAccountId = account.id;
  }

  selectTab(tab: AccountTab): void {
    this.activeTab = tab;
  }
}
