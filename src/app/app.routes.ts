import { Routes } from '@angular/router';

export const routes: Routes = [
      {
    path: 'accounts',
    loadComponent: () =>
      import('./features/accounts/account-list/account-list')
        .then(m => m.AccountListComponent)
  }

];
