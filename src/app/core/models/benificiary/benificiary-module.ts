export type BeneficiaryStatus = 'Pending' | 'Active' | 'Failed';

export interface Beneficiary {
  id: number;
  name: string;
  accountNumber: string;
  bankName?: string;
  ifsc: string;
  status: BeneficiaryStatus;
}
