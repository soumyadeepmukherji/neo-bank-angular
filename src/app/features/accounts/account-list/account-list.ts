
import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import {
  Account,
  AccountType
} from '../../../core/models/account';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './account-list.html'
})
export class AccountListComponent {

  accountTypes: AccountType[] = [
    'Savings',
    'Current',
    'FD'
  ];

  selectedAccountType: AccountType = 'Savings';

  accounts: Account[] = [
    {
      id: 1,
      accountType: 'Savings',
      lastFourDigits: '1234',
      balance: 25000,
      status: 'Active'
    },
    {
      id: 2,
      accountType: 'Savings',
      lastFourDigits: '5678',
      balance: 45000,
      status: 'Active'
    },
    {
      id: 3,
      accountType: 'Current',
      lastFourDigits: '9012',
      balance: 85000,
      status: 'Pending'
    },
    {
      id: 4,
      accountType: 'FD',
      lastFourDigits: '3456',
      balance: 100000,
      status: 'Matured'
    }
  ];

  selectAccountType(type: AccountType): void {
    this.selectedAccountType = type;
  }

  get filteredAccounts(): Account[] {
    return this.accounts.filter(
      account => account.accountType === this.selectedAccountType
    );
  }

  get totalBalance(): number {
    return this.filteredAccounts.reduce(
      (total, account) => total + account.balance,
      0
    );
  }
}
