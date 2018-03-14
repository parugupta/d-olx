import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);