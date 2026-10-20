
import { Component } from '@angular/core';

interface BankAccount {
  name: string;
  lastFour: string;
  balance: number;
  color: 'blue' | 'cyan' | 'purple';
}

interface Transaction {
  id: number;
  initials: string;
  merchant: string;
  date: string;
  category: string;
  amount: number;
  type: 'credit' | 'debit';
  iconClass: 'indigo' | 'green' | 'amber' | 'violet';
}

interface SpendingCategory {
  name: string;
  percentage: number;
  className: string;
}

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {
  customerName = 'Arjun';

  accounts: BankAccount[] = [
    {
      name: 'Savings',
      lastFour: '4821',
      balance: 524810.40,
      color: 'blue',
    },
    {
      name: 'Salary',
      lastFour: '7392',
      balance: 285250.00,
      color: 'cyan',
    },
    {
      name: 'Fixed deposit',
      lastFour: '1168',
      balance: 32500.00,
      color: 'purple',
    },
  ];

  transactions: Transaction[] = [
    {
      id: 1,
      initials: 'NS',
      merchant: 'Northstar Supermarket',
      date: 'Today',
      category: 'Groceries',
      amount: 2840,
      type: 'debit',
      iconClass: 'indigo',
    },
    {
      id: 2,
      initials: 'SC',
      merchant: 'Salary credit',
      date: '24 May',
      category: 'Income',
      amount: 125000,
      type: 'credit',
      iconClass: 'green',
    },
    {
      id: 3,
      initials: 'ME',
      merchant: 'Metro Energy',
      date: '23 May',
      category: 'Utilities',
      amount: 3260,
      type: 'debit',
      iconClass: 'amber',
    },
    {
      id: 4,
      initials: 'SD',
      merchant: 'Streamline Digital',
      date: '22 May',
      category: 'Subscription',
      amount: 799,
      type: 'debit',
      iconClass: 'violet',
    },
  ];

  spendingMonth = 'May 2025';
  previousSpendingMonth = 'April';
  monthlySpending = 42680;
  spendingChange = 8;

  spendingCategories: SpendingCategory[] = [
    { name: 'Shopping', percentage: 38, className: '' },
    { name: 'Bills', percentage: 27, className: 'l2' },
    { name: 'Food', percentage: 21, className: 'l3' },
    { name: 'Other', percentage: 14, className: 'l4' },
  ];

  securityStatus = 'All secure';

  securityMessage =
    'No unusual activity detected. Security check completed 2 hours ago.';

  get totalBalance(): number {
    return this.accounts.reduce(
      (total, account) => total + account.balance,
      0,
    );
  }

  get formattedDate(): string {
    return new Intl.DateTimeFormat('en-IN', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
    })
      .format(new Date())
      .toUpperCase();
  }

  get greeting(): string {
    const hour = new Date().getHours();

    if (hour < 12) {
      return 'Good morning';
    }

    if (hour < 17) {
      return 'Good afternoon';
    }

    return 'Good evening';
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  }

  downloadSummary(): void {
    const rows = [
      ['Neo Bank Account Summary'],
      ['Customer', this.customerName],
      ['Generated on', new Date().toLocaleString('en-IN')],
      [],
      ['Accounts'],
      ['Account Name', 'Last Four Digits', 'Balance (INR)'],
      ...this.accounts.map(account => [
        account.name,
        account.lastFour,
        account.balance.toFixed(2),
      ]),
      [],
      ['Total Balance (INR)', this.totalBalance.toFixed(2)],
      [],
      ['Recent Transactions'],
      ['Merchant', 'Date', 'Category', 'Type', 'Amount (INR)'],
      ...this.transactions.map(transaction => [
        transaction.merchant,
        transaction.date,
        transaction.category,
        transaction.type,
        transaction.amount.toFixed(2),
      ]),
      [],
      ['Monthly Spending (INR)', this.monthlySpending.toFixed(2)],
      ['Spending Month', this.spendingMonth],
      [],
      ['Spending Category', 'Percentage'],
      ...this.spendingCategories.map(category => [
        category.name,
        `${category.percentage}%`,
      ]),
    ];

    const csvContent = rows
      .map(row =>
        row
          .map(value => {
            const text = String(value ?? '');
            return `"${text.replace(/"/g, '""')}"`;
          })
          .join(','),
      )
      .join('\r\n');

    const blob = new Blob(['\uFEFF', csvContent], {
      type: 'text/csv;charset=utf-8;',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'neo-bank-account-summary.csv';
    link.click();

    URL.revokeObjectURL(url);
  }
}
