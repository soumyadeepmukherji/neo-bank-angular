
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Beneficiary } from '../../../app/core/models/benificiary/benificiary-module';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {
  private beneficiaries: Beneficiary[] = [
    {
      id: 1,
      name: 'Rahul Kumar',
      accountNumber: '123456789012',
      bankName: 'HDFC Bank',
      ifsc: 'HDFC0001234',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      accountNumber: '987654321098',
      bankName: 'ICICI Bank',
      ifsc: 'ICIC0002345',
      status: 'Pending'
    },
    {
      id: 3,
      name: 'Arun Kumar',
      accountNumber: '567812349012',
      ifsc: 'SBIN0003456',
      status: 'Failed'
    }
  ];

  getBeneficiaries(): Observable<Beneficiary[]> {
    return of(this.beneficiaries);
  }

  getEmptyBeneficiaries(): Observable<Beneficiary[]> {
    return of([]);
  }
  addBeneficiary(data: {
  name: string;
  accountNumber: string;
  bankName: string;
  ifsc: string;
}): Observable<Beneficiary> {
  const newBeneficiary: Beneficiary = {
    id: Math.max(0, ...this.beneficiaries.map(b => b.id)) + 1,
    name: data.name,
    accountNumber: data.accountNumber,
    bankName: data.bankName,
    ifsc: data.ifsc,
    status: 'Pending'
  };

  this.beneficiaries.push(newBeneficiary);

  return of(newBeneficiary);
}
}

