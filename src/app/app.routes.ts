import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { BeneficiaryComponent } from './features/beneficiary/beneficiary';

export const routes: Routes = [

    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      loadComponent: () =>
        import('./features/auth/login/login')
          .then(m => m.LoginComponent)
    },

    {
      path: '',
      loadComponent: () =>
        import('./layout/main-layout/main-layout')
          .then(m => m.MainLayout),
          // canActivate: [authGuard],
      children: [
        {
          path: 'dashboard',
          loadComponent: () =>
            import('./features/dashboard/dashboard-page/dashboard-page')
              .then(m => m.DashboardPage)
        },
        {
          path: 'accounts',
          loadComponent: () =>
            import('./features/accounts/account-list/account-list')
              .then(m => m.AccountListComponent)
  },
    {
    path: 'beneficiary',
    component: BeneficiaryComponent
        },
        {
          path: 'beneficiaries',
          loadComponent: () =>
            import('./features/beneficiary/beneficiary')
              .then(m => m.BeneficiaryComponent)
        },
        {
          path: 'statements',
          loadComponent: () =>
            import('./features/statements/statements.pages/statements.pages')
              .then(m => m.StatementsPages)
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'dashboard'
    }
];
