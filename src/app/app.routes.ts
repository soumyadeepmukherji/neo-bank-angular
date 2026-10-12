import { Routes } from '@angular/router';
import { BeneficiaryComponent } from './features/beneficiary/beneficiary';

export const routes: Routes = [
      {
    path: 'accounts',
    loadComponent: () =>
      import('./features/accounts/account-list/account-list')
        .then(m => m.AccountListComponent)
  },
    {
    path: 'beneficiary',
    component: BeneficiaryComponent
  }

];
