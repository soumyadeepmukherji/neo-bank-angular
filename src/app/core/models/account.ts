
export type AccountType = 'Savings' | 'Current' | 'FD';

export type AccountStatus = 'Active' | 'Pending' | 'Matured';

export interface Account {
  id: number;
  accountType: AccountType;
  lastFourDigits: string;
  balance: number;
  status: AccountStatus;
}