import { Routes } from '@angular/router';
import { ConsoleShellComponent } from './core/shell/console-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ConsoleShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'services', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'services/:id',
        loadComponent: () => import('./features/service-detail/service-detail.component').then(m => m.ServiceDetailComponent)
      },
      {
        path: 'iam',
        loadComponent: () => import('./features/iam/iam.component').then(m => m.IamComponent)
      },
    ]
  },
  { path: '**', redirectTo: '' }
];
