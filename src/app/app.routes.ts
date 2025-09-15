import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) 
  },
  {
    path:'dashboard/search',
    loadComponent: ()=> import('./components/search/search.component').then(m=>m.SearchComponent)
  },
  {
    path:'total-count',
    loadComponent: () => import('./components/total-count/total-count.component').then(c => c.TotalCountComponent)
  }
];