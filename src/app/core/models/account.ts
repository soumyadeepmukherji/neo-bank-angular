
export type AccountType = 'Savings' | 'Current' | 'FD';

export type AccountStatus = 'Active' | 'Pending' | 'Matured';

export type AccountTab = 'Overview' | 'Transactions' | 'Details';

export interface Account {
  id: number;
  accountType: AccountType;
  lastFourDigits: string;
  balance: number;
  status: AccountStatus;

  // Used only for Fixed Deposit accounts
  interestRate?: number;
  maturityDate?: string;
  maturityAmount?: number;
}
