import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Account } from '../../../core/models/account';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-account-list',
  styleUrl: './account-list.css',
  templateUrl: './account-list.html',
})
export class AccountList {
   accounts: Account[] = [
    {
      id: 1,
      accountType: 'Savings',
      lastFourDigits: '4582',
      balance: 85450.75,
      status: 'Active',
    },
    {
      id: 2,
      accountType: 'Current',
      lastFourDigits: '7821',
      balance: 245000,
      status: 'Active',
    },
    {
      id: 3,
      accountType: 'FD',
      lastFourDigits: '9136',
      balance: 150000,
      status: 'Matured',
    },
  ];
}
